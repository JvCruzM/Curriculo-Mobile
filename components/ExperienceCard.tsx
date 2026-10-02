import { StyleSheet, View } from "react-native";

import { Text } from "@/components/Themed";

type ExperienceCardProps = {
  title: string;
  institution: string;
  period: string;
  description?: string;
  type?: string;
};

export default function ExperienceCard({
  title,
  institution,
  period,
  description,
  type,
}: ExperienceCardProps) {
  return (
    <View style={styles.card}>
      {type ? <Text style={styles.type}>{type}</Text> : null}

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.institution}>{institution}</Text>

      <Text style={styles.period}>{period}</Text>

      {description ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#18181B",
    borderWidth: 1,
    borderColor: "#27272A",
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
  },

  type: {
    color: "#8B5CF6",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 8,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 24,
    marginBottom: 6,
  },

  institution: {
    color: "#D4D4D8",
    fontSize: 14,
    lineHeight: 20,
  },

  period: {
    color: "#8B5CF6",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 10,
  },

  description: {
    color: "#A1A1AA",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 12,
  },
});
