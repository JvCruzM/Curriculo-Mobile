import { StyleSheet, Text, View } from "react-native";

type TechnologyChipProps = {
  name: string;
  highlighted?: boolean;
};

export default function TechnologyChip({
  name,
  highlighted = false,
}: TechnologyChipProps) {
  return (
    <View style={[styles.container, highlighted && styles.highlighted]}>
      <Text style={[styles.text, highlighted && styles.highlightedText]}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#18181B",
    borderWidth: 1,
    borderColor: "#27272A",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
  },

  highlighted: {
    backgroundColor: "#8B5CF6",
    borderColor: "#8B5CF6",
  },

  text: {
    color: "#D4D4D8",
    fontSize: 13,
    fontWeight: "600",
  },

  highlightedText: {
    color: "#FFFFFF",
  },
});
