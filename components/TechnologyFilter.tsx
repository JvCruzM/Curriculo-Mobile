import { Pressable, ScrollView, StyleSheet, View } from "react-native";

import { Text } from "@/components/Themed";

type TechnologyFilterProps = {
  technologies: string[];
  selectedTechnology: string | null;
  onSelect: (technology: string | null) => void;
};

export default function TechnologyFilter({
  technologies,
  selectedTechnology,
  onSelect,
}: TechnologyFilterProps) {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Pressable
          style={[
            styles.chip,
            selectedTechnology === null && styles.selectedChip,
          ]}
          onPress={() => onSelect(null)}
        >
          <Text
            style={[
              styles.text,
              selectedTechnology === null && styles.selectedText,
            ]}
          >
            Todos
          </Text>
        </Pressable>

        {technologies.map((technology) => {
          const selected = selectedTechnology === technology;

          return (
            <Pressable
              key={technology}
              style={[styles.chip, selected && styles.selectedChip]}
              onPress={() => onSelect(technology)}
            >
              <Text style={[styles.text, selected && styles.selectedText]}>
                {technology}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 22,
  },

  content: {
    paddingRight: 8,
  },

  chip: {
    backgroundColor: "#18181B",
    borderWidth: 1,
    borderColor: "#27272A",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
  },

  selectedChip: {
    backgroundColor: "#8B5CF6",
    borderColor: "#8B5CF6",
  },

  text: {
    color: "#A1A1AA",
    fontSize: 13,
    fontWeight: "700",
  },

  selectedText: {
    color: "#FFFFFF",
  },
});
