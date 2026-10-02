import { ActivityIndicator, StyleSheet, View } from "react-native";

import { Text } from "@/components/Themed";

type ScreenStateProps = {
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
};

export default function ScreenState({
  loading = false,
  error = null,
  onRetry,
}: ScreenStateProps) {
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#8B5CF6" />

        <Text style={styles.message}>Carregando informações...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Não foi possível carregar os dados</Text>

        <Text style={styles.message}>
          Verifique sua conexão e tente novamente.
        </Text>

        {onRetry ? (
          <Text style={styles.retry} onPress={onRetry}>
            Tentar novamente
          </Text>
        ) : null}
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090B",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 10,
  },

  message: {
    color: "#A1A1AA",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    marginTop: 14,
  },

  retry: {
    color: "#8B5CF6",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 20,
  },
});
