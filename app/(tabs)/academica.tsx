import { ScrollView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Text } from "@/components/Themed";
import SectionTitle from "@/components/SectionTitle";
import ExperienceCard from "@/components/ExperienceCard";

export default function AcademicaScreen() {
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

        <ExperienceCard
          type="Tecnólogo"
          title="Sistemas para Internet"
          institution="Universidade Católica de Pernambuco — UNICAP"
          period="Abril de 2025 — Cursando"
          description="Formação superior voltada ao desenvolvimento de sistemas, aplicações web e soluções digitais."
        />

        <ExperienceCard
          type="Técnico"
          title="Redes de Computadores"
          institution="ETE Professor Lucilo Ávila Pessoa"
          period="Fevereiro de 2020 — Dezembro de 2022"
          description="Formação técnica com foco em redes de computadores, infraestrutura e fundamentos de tecnologia da informação."
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Minha formação continua em evolução com novos estudos e projetos.
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
