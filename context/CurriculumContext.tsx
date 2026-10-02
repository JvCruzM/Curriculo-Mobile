import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import type { FullProfile } from "@/types/curriculum";
import { getFullProfile } from "@/services/api";

type CurriculumContextData = {
  profile: FullProfile | null;
  loading: boolean;
  error: string | null;
  reload: () => Promise<void>;
};

const CurriculumContext = createContext<CurriculumContextData | undefined>(
  undefined,
);

type CurriculumProviderProps = {
  children: ReactNode;
};

export function CurriculumProvider({ children }: CurriculumProviderProps) {
  const [profile, setProfile] = useState<FullProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProfile = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getFullProfile();

      setProfile(data);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Não foi possível carregar o currículo.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <CurriculumContext.Provider
      value={{
        profile,
        loading,
        error,
        reload: loadProfile,
      }}
    >
      {children}
    </CurriculumContext.Provider>
  );
}

export function useCurriculum() {
  const context = useContext(CurriculumContext);

  if (!context) {
    throw new Error(
      "useCurriculum deve ser utilizado dentro de CurriculumProvider.",
    );
  }

  return context;
}
