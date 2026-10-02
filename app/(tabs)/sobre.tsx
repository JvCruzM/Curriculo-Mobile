import { ScrollView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Text } from "@/components/Themed";
import SectionTitle from "@/components/SectionTitle";
import TechnologyChip from "@/components/TechnologyChip";

const technologies = [
  "React Native",
  "Expo",
  "Expo Router",
  "TypeScript",
  "JavaScript",
  "REST API",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Sequelize",
  "NeonDB",
  "Vercel",
];

export default function SobreScreen() {
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

          <Text style={styles.description}>
            Sou João Vitor Cruz de Menezes, estudante de Sistemas para Internet
            e profissional com experiência nas áreas de logística e
            administração.
          </Text>

          <Text style={styles.description}>
            Atualmente estou direcionando minha formação para Tecnologia da
            Informação, com foco no desenvolvimento de sistemas e soluções
            digitais.
          </Text>
        </View>

        <View style={styles.section}>
          <SectionTitle
            title="Formação"
            subtitle="Minha trajetória acadêmica até o momento."
          />

          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Sistemas para Internet</Text>

            <Text style={styles.cardSubtitle}>
              Universidade Católica de Pernambuco — UNICAP
            </Text>

            <Text style={styles.cardPeriod}>2025 — Cursando</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.cardTitle}>Redes de Computadores</Text>

            <Text style={styles.cardSubtitle}>
              ETE Professor Lucilo Ávila Pessoa
            </Text>

            <Text style={styles.cardPeriod}>2020 — 2022</Text>
          </View>
        </View>

        <View style={styles.section}>
          <SectionTitle
            title="Tecnologias"
            subtitle="Tecnologias e ferramentas utilizadas neste projeto."
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
            Este aplicativo utiliza uma API REST própria para carregar as
            informações do currículo.
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
    marginBottom: 12,
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
