import {
  ActivityIndicator,
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { Text } from "@/components/Themed";
import { useCurriculum } from "@/context/CurriculumContext";

export default function HomeScreen() {
  const { profile, loading, error } = useCurriculum();

  if (loading) {
    return (
      <View style={styles.centered}>
        <StatusBar style="light" />

        <ActivityIndicator size="large" color="#8B5CF6" />

        <Text style={styles.loadingText}>Carregando currículo...</Text>
      </View>
    );
  }

  if (error || !profile) {
    return (
      <View style={styles.centered}>
        <StatusBar style="light" />

        <Text style={styles.errorTitle}>
          Não foi possível carregar o currículo
        </Text>

        <Text style={styles.errorDescription}>
          Verifique sua conexão e tente novamente.
        </Text>

        {error ? <Text style={styles.errorDetails}>{error}</Text> : null}
      </View>
    );
  }

  const openLink = async (url: string) => {
    await Linking.openURL(url);
  };

  return (
    <>
      <StatusBar style="light" />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          {profile.photoUrl ? (
            <View style={styles.imageWrapper}>
              <Image
                source={{ uri: profile.photoUrl }}
                style={styles.profileImage}
              />
            </View>
          ) : null}

          <Text style={styles.greeting}>Olá, eu sou</Text>

          <Text style={styles.name}>{profile.name}</Text>

          <Text style={styles.role}>Sistemas para Internet</Text>

          {profile.location ? (
            <Text style={styles.location}>{profile.location}</Text>
          ) : null}
        </View>

        <View style={styles.divider} />

        {profile.summary ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sobre mim</Text>

            <Text style={styles.description}>{profile.summary}</Text>
          </View>
        ) : null}

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {profile.academicExperiences.length}
            </Text>

            <Text style={styles.statLabel}>Formações</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {profile.professionalExperiences.length}
            </Text>

            <Text style={styles.statLabel}>Experiências</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{profile.projects.length}</Text>

            <Text style={styles.statLabel}>Projetos</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conheça meu trabalho</Text>

          <View style={styles.buttonsContainer}>
            {profile.githubUrl ? (
              <Pressable
                style={({ pressed }) => [
                  styles.socialButton,
                  pressed && styles.buttonPressed,
                ]}
                onPress={() => openLink(profile.githubUrl!)}
              >
                <Text style={styles.socialButtonText}>GitHub</Text>
              </Pressable>
            ) : null}

            {profile.linkedinUrl ? (
              <Pressable
                style={({ pressed }) => [
                  styles.socialButton,
                  pressed && styles.buttonPressed,
                ]}
                onPress={() => openLink(profile.linkedinUrl!)}
              >
                <Text style={styles.socialButtonText}>LinkedIn</Text>
              </Pressable>
            ) : null}
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Informações carregadas da API REST do meu portfólio.
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

  centered: {
    flex: 1,
    backgroundColor: "#09090B",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },

  loadingText: {
    color: "#A1A1AA",
    fontSize: 14,
    marginTop: 14,
  },

  errorTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 10,
  },

  errorDescription: {
    color: "#A1A1AA",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },

  errorDetails: {
    color: "#52525B",
    fontSize: 12,
    textAlign: "center",
    marginTop: 12,
  },

  hero: {
    alignItems: "flex-start",
  },

  imageWrapper: {
    width: 92,
    height: 92,
    borderRadius: 46,
    padding: 3,
    backgroundColor: "#8B5CF6",
    marginBottom: 24,
  },

  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 46,
  },

  greeting: {
    color: "#A1A1AA",
    fontSize: 18,
    marginBottom: 8,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 38,
    lineHeight: 42,
    fontWeight: "800",
  },

  role: {
    color: "#8B5CF6",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 18,
  },

  location: {
    color: "#A1A1AA",
    fontSize: 15,
    marginTop: 6,
  },

  divider: {
    height: 1,
    backgroundColor: "#27272A",
    marginVertical: 28,
  },

  section: {
    marginBottom: 28,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
  },

  description: {
    color: "#A1A1AA",
    fontSize: 15,
    lineHeight: 24,
  },

  statsContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 32,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#18181B",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 10,
    alignItems: "center",
  },

  statNumber: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 4,
  },

  statLabel: {
    color: "#A1A1AA",
    fontSize: 12,
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
    gap: 12,
  },

  socialButton: {
    flex: 1,
    backgroundColor: "#8B5CF6",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },

  socialButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  buttonPressed: {
    opacity: 0.7,
  },

  footer: {
    alignItems: "center",
    paddingTop: 10,
  },

  footerText: {
    color: "#52525B",
    fontSize: 12,
    textAlign: "center",
  },
});
