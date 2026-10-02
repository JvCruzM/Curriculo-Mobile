import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Text } from "@/components/Themed";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import TechnologyFilter from "@/components/TechnologyFilter";

const projects = [
  {
    id: "amigo-ou-inimigo",
    name: "Amigo ou Inimigo",
    description:
      "Aplicação web para realizar sorteios de amigo secreto com uma variação de amigo ou inimigo, utilizando autenticação e envio de resultados por e-mail.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Prisma",
      "Supabase",
      "Nodemailer",
      "bcrypt",
    ],
    githubUrl: "https://github.com/JvCruzM/Amigo-ou-Inimigo",
    projectUrl: "https://amigo-ou-inimigo.vercel.app/",
  },
  {
    id: "youseen",
    name: "YouSeen",
    description:
      "Extensão para navegadores baseada em JavaScript que permite ocultar vídeos do YouTube que já foram assistidos.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Chrome Extensions API",
      "Manifest V3",
    ],
    githubUrl: "https://github.com/JvCruzM/YouSeen",
    projectUrl: "https://github.com/JvCruzM/YouSeen",
  },
];

export default function ProjetosScreen() {
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(
    null,
  );

  const technologies = useMemo(() => {
    const allTechnologies = projects.flatMap((project) => project.technologies);

    return [...new Set(allTechnologies)].sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (!selectedTechnology) {
      return projects;
    }

    return projects.filter((project) =>
      project.technologies.includes(selectedTechnology),
    );
  }, [selectedTechnology]);

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

          <TechnologyFilter
            technologies={technologies}
            selectedTechnology={selectedTechnology}
            onSelect={setSelectedTechnology}
          />
        </View>

        <View>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                technologies={project.technologies}
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
