import { StyleSheet, Text, View } from "react-native";

export default function ProjetosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projetos</Text>
      <Text style={styles.text}>
        Aqui serão exibidos os projetos e o filtro por tecnologia.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090B",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  text: {
    color: "#A1A1AA",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
});