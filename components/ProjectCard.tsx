import { Linking, Pressable, StyleSheet, View } from "react-native";

import { Text } from "@/components/Themed";
import TechnologyChip from "@/components/TechnologyChip";

type ProjectCardProps = {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string | null;
  projectUrl?: string | null;
};

export default function ProjectCard({
  name,
  description,
  technologies,
  githubUrl,
  projectUrl,
}: ProjectCardProps) {
  const openLink = async (url: string) => {
    await Linking.openURL(url);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.technologies}>
        {technologies.map((technology) => (
          <TechnologyChip key={technology} name={technology} />
        ))}
      </View>

      <View style={styles.actions}>
        {githubUrl ? (
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => openLink(githubUrl)}
          >
            <Text style={styles.buttonText}>GitHub</Text>
          </Pressable>
        ) : null}

        {projectUrl ? (
          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.secondaryButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => openLink(projectUrl)}
          >
            <Text style={styles.secondaryButtonText}>Projeto</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#18181B",
    borderWidth: 1,
    borderColor: "#27272A",
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
  },

  description: {
    color: "#A1A1AA",
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,
  },

  technologies: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },

  actions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 8,
  },

  button: {
    backgroundColor: "#8B5CF6",
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 11,
  },

  secondaryButton: {
    backgroundColor: "#27272A",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },

  secondaryButtonText: {
    color: "#D4D4D8",
    fontSize: 13,
    fontWeight: "700",
  },

  buttonPressed: {
    opacity: 0.7,
  },
});
