import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Text } from "@/components/Themed";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import TechnologyFilter from "@/components/TechnologyFilter";
import ScreenState from "@/components/ScreenState";

import { useCurriculum } from "@/context/CurriculumContext";

export default function ProjetosScreen() {
  const { profile, loading, error, reload } = useCurriculum();

  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(
    null,
  );

  const technologies = useMemo(() => {
    if (!profile) {
      return [];
    }

    const allTechnologies = profile.projects.flatMap((project) =>
      project.technologies.map((technology) => technology.name),
    );

    return [...new Set(allTechnologies)].sort();
  }, [profile]);

  const filteredProjects = useMemo(() => {
    if (!profile) {
      return [];
    }

    if (!selectedTechnology) {
      return profile.projects;
    }

    return profile.projects.filter((project) =>
      project.technologies.some(
        (technology) => technology.name === selectedTechnology,
      ),
    );
  }, [profile, selectedTechnology]);

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
          <Text style={styles.eyebrow}>PORTFÓLIO</Text>

          <SectionTitle
            title="Projetos"
            subtitle="Alguns dos projetos que desenvolvi durante minha trajetória."
          />
        </View>

        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>Filtrar por tecnologia</Text>

          {technologies.length > 0 ? (
            <TechnologyFilter
              technologies={technologies}
              selectedTechnology={selectedTechnology}
              onSelect={setSelectedTechnology}
            />
          ) : (
            <Text style={styles.noTechnologies}>
              Nenhuma tecnologia encontrada nos projetos.
            </Text>
          )}
        </View>

        <View>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                technologies={project.technologies.map(
                  (technology) => technology.name,
                )}
                githubUrl={project.githubUrl}
                projectUrl={project.projectUrl}
              />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>Nenhum projeto encontrado</Text>

              <Text style={styles.emptyDescription}>
                Não existem projetos associados à tecnologia selecionada.
              </Text>
            </View>
          )}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Toque nos botões para conhecer os projetos.
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
    marginBottom: 4,
  },

  eyebrow: {
    color: "#8B5CF6",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 10,
  },

  filterSection: {
    marginBottom: 4,
  },

  filterTitle: {
    color: "#D4D4D8",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 12,
  },

  noTechnologies: {
    color: "#71717A",
    fontSize: 13,
    marginBottom: 16,
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
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },

  emptyDescription: {
    color: "#71717A",
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
  },

  footer: {
    alignItems: "center",
    paddingTop: 8,
  },

  footerText: {
    color: "#52525B",
    fontSize: 12,
    textAlign: "center",
  },
});
