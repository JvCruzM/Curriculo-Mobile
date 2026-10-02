import { ScrollView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Text } from "@/components/Themed";
import SectionTitle from "@/components/SectionTitle";
import ExperienceCard from "@/components/ExperienceCard";
import ScreenState from "@/components/ScreenState";
import { formatPeriod } from '@/utils/formatDate';

import { useCurriculum } from "@/context/CurriculumContext";

export default function ProfissionalScreen() {
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
          <Text style={styles.eyebrow}>EXPERIÊNCIA</Text>

          <SectionTitle
            title="Experiência Profissional"
            subtitle="Minha trajetória profissional e as experiências que contribuíram para minha formação."
          />
        </View>

        {profile.professionalExperiences.length > 0 ? (
          profile.professionalExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              type="Experiência profissional"
              title={experience.position}
              institution={experience.company}
              period={formatPeriod(experience.startDate, experience.endDate)}
              description={experience.description ?? undefined}
            />
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>
              Nenhuma experiência profissional encontrada.
            </Text>
          </View>
        )}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Experiências que fazem parte da minha trajetória até o momento.
          </Text>
        </View>
      </ScrollView>
    </>
  );
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
