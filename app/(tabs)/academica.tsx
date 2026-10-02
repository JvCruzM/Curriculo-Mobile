import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";

import ExperienceCard from "@/components/ExperienceCard";
import ScreenState from "@/components/ScreenState";
import SectionTitle from "@/components/SectionTitle";
import { Text } from "@/components/Themed";

import { useCurriculum } from "@/context/CurriculumContext";

export default function AcademicaScreen() {
  const { profile, loading, error, reload } = useCurriculum();

  if (loading || error || !profile) {
    return (
      <>
        <StatusBar style="light" />

        <ScreenState loading={loading} error={error} onRetry={reload} />
      </>
    );
  }

  return (
    <>
      <StatusBar style="light" />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.eyebrow}>TRAJETÓRIA</Text>

          <SectionTitle
            title="Experiência Acadêmica"
            subtitle="Minha formação e trajetória educacional."
          />
        </View>

        {profile.academicExperiences.length > 0 ? (
          profile.academicExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              type={experience.degree}
              title={experience.course}
              institution={experience.institution}
              period={formatPeriod(experience.startDate, experience.endDate)}
              description={experience.description ?? undefined}
            />
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>
              Nenhuma experiência acadêmica encontrada.
            </Text>
          </View>
        )}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Minha formação continua em evolução com novos estudos e projetos.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

function formatPeriod(startDate: string, endDate: string | null) {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "Atual";

  return `${start} — ${end}`;
}

function formatDate(date: string) {
  const parsedDate = new Date(`${date}T00:00:00`);

  return parsedDate.toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090B",
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 40,
  },

  header: {
    marginBottom: 8,
  },

  eyebrow: {
    color: "#8B5CF6",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 10,
  },

  emptyState: {
    backgroundColor: "#18181B",
    borderWidth: 1,
    borderColor: "#27272A",
    borderRadius: 18,
    padding: 24,
    alignItems: "center",
  },

  emptyTitle: {
    color: "#A1A1AA",
    fontSize: 14,
    textAlign: "center",
  },

  footer: {
    marginTop: 8,
    alignItems: "center",
  },

  footerText: {
    color: "#52525B",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
  },
});
