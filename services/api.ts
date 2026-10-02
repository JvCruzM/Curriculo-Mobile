import type { FullProfile, Profile } from "@/types/curriculum";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const PROFILE_ID = process.env.EXPO_PUBLIC_PROFILE_ID;

if (!API_URL) {
  throw new Error("EXPO_PUBLIC_API_URL não foi configurada no arquivo .env.");
}

if (!PROFILE_ID) {
  throw new Error(
    "EXPO_PUBLIC_PROFILE_ID não foi configurada no arquivo .env.",
  );
}

async function request<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getProfiles(): Promise<Profile[]> {
  return request<Profile[]>("/profiles");
}

export async function getFullProfile(): Promise<FullProfile> {
  return request<FullProfile>(`/profiles/${PROFILE_ID}/full`);
}
