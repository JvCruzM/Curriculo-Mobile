import { ScrollView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Text } from "@/components/Themed";
import SectionTitle from "@/components/SectionTitle";
import ExperienceCard from "@/components/ExperienceCard";

export default function ProfissionalScreen() {
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

        <ExperienceCard
          type="Experiência profissional"
          title="Auxiliar de Logística"
          institution="TRA Distribuidora"
          period="Maio de 2023 — Setembro de 2025"
          description="Atuação em rotinas de logística e operações em uma distribuidora de produtos para animais de estimação."
        />

        <ExperienceCard
          type="Aprendiz"
          title="Aprendiz de Rotina Administrativa"
          institution="FICR"
          period="Julho de 2026 — Atual"
          description="Atuação em rotinas administrativas relacionadas ao atendimento e apoio às atividades da instituição."
        />

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
