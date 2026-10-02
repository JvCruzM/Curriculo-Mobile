import { ScrollView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Text } from "@/components/Themed";
import SectionTitle from "@/components/SectionTitle";
import TechnologyChip from "@/components/TechnologyChip";
import ScreenState from "@/components/ScreenState";

import { useCurriculum } from "@/context/CurriculumContext";

const technologies = [
  "React Native",
  "Expo",
  "Expo Router",
  "TypeScript",
  "REST API",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Sequelize",
  "NeonDB",
  "Vercel",
];

export default function SobreScreen() {
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
          <Text style={styles.eyebrow}>SOBRE O PORTFÓLIO</Text>

          <Text style={styles.title}>Quem sou eu?</Text>

          <Text style={styles.description}>{profile.summary}</Text>

          {profile.location ? (
            <Text style={styles.location}>{profile.location}</Text>
          ) : null}
        </View>

        <View style={styles.section}>
          <SectionTitle
            title="Formação"
            subtitle="Minha trajetória acadêmica até o momento."
          />

          {profile.academicExperiences.map((experience) => (
            <View key={experience.id} style={styles.infoCard}>
              <Text style={styles.cardDegree}>{experience.degree}</Text>

              <Text style={styles.cardTitle}>{experience.course}</Text>

              <Text style={styles.cardSubtitle}>{experience.institution}</Text>

              <Text style={styles.cardPeriod}>
                {formatPeriod(experience.startDate, experience.endDate)}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <SectionTitle
            title="Tecnologias"
            subtitle="Tecnologias e ferramentas utilizadas para desenvolver este aplicativo."
          />

          <View style={styles.chipsContainer}>
            {technologies.map((technology) => (
              <TechnologyChip key={technology} name={technology} />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <SectionTitle
            title="Funcionalidade extra"
            subtitle="Um recurso adicional desenvolvido para o aplicativo."
          />

          <View style={styles.featureCard}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureIconText}>⌕</Text>
            </View>

            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>
                Filtro de projetos por tecnologia
              </Text>

              <Text style={styles.featureDescription}>
                Na seção de projetos será possível filtrar os trabalhos de
                acordo com as tecnologias utilizadas em cada projeto.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Informações do currículo carregadas da API REST.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

function formatPeriod(startDate: string, endDate: string | null) {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "atual";

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
    marginBottom: 36,
  },

  eyebrow: {
    color: "#8B5CF6",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 10,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "800",
    marginBottom: 16,
  },

  description: {
    color: "#A1A1AA",
    fontSize: 15,
    lineHeight: 24,
  },

  location: {
    color: "#8B5CF6",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 12,
  },

  section: {
    marginBottom: 36,
  },

  infoCard: {
    backgroundColor: "#18181B",
    borderWidth: 1,
    borderColor: "#27272A",
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
  },

  cardDegree: {
    color: "#8B5CF6",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 8,
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 6,
  },

  cardSubtitle: {
    color: "#A1A1AA",
    fontSize: 14,
    lineHeight: 20,
  },

  cardPeriod: {
    color: "#8B5CF6",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 10,
    textTransform: "capitalize",
  },

  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  featureCard: {
    flexDirection: "row",
    backgroundColor: "#18181B",
    borderWidth: 1,
    borderColor: "#8B5CF6",
    borderRadius: 18,
    padding: 18,
  },

  featureIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#8B5CF6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  featureIconText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },

  featureContent: {
    flex: 1,
  },

  featureTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },

  featureDescription: {
    color: "#A1A1AA",
    fontSize: 13,
    lineHeight: 20,
  },

  footer: {
    alignItems: "center",
    paddingTop: 4,
  },

  footerText: {
    color: "#52525B",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
  },
});
