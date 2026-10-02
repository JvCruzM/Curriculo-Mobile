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
import { SymbolView } from "expo-symbols";

import { Text } from "@/components/Themed";
import StatCard from "@/components/StatCard";
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
        <View style={styles.heroCard}>
          <View style={styles.accentLine} />

          <View style={styles.heroContent}>
            {profile.photoUrl ? (
              <View style={styles.imageWrapper}>
                <Image
                  source={{ uri: profile.photoUrl }}
                  style={styles.profileImage}
                />
              </View>
            ) : null}

            <Text style={styles.eyebrow}>PORTFÓLIO PESSOAL</Text>

            <Text style={styles.greeting}>Olá, eu sou</Text>

            <Text style={styles.name}>{profile.name}</Text>

            <View style={styles.roleContainer}>
              <View style={styles.roleDot} />

              <Text style={styles.role}>Sistemas para Internet</Text>
            </View>

            {profile.location ? (
              <View style={styles.locationContainer}>
                <SymbolView
                  name={{
                    ios: "location.fill",
                    android: "location_on",
                    web: "location_on",
                  }}
                  tintColor="#71717A"
                  size={16}
                />

                <Text style={styles.location}>{profile.location}</Text>
              </View>
            ) : null}
          </View>
        </View>

        <View style={styles.socialSection}>
          {profile.githubUrl ? (
            <Pressable
              style={({ pressed }) => [
                styles.socialButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => openLink(profile.githubUrl!)}
            >
              <SymbolView
                name={{
                  ios: "chevron.left.forwardslash.chevron.right",
                  android: "code",
                  web: "code",
                }}
                tintColor="#FFFFFF"
                size={18}
              />

              <Text style={styles.socialButtonText}>GitHub</Text>
            </Pressable>
          ) : null}

          {profile.linkedinUrl ? (
            <Pressable
              style={({ pressed }) => [
                styles.socialButton,
                styles.linkedinButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => openLink(profile.linkedinUrl!)}
            >
              <SymbolView
                name={{
                  ios: "person.crop.square.fill",
                  android: "person",
                  web: "person",
                }}
                tintColor="#FFFFFF"
                size={18}
              />

              <Text style={styles.socialButtonText}>LinkedIn</Text>
            </Pressable>
          ) : null}
        </View>

        {profile.summary ? (
          <View style={styles.section}>
            <Text style={styles.sectionEyebrow}>SOBRE MIM</Text>

            <Text style={styles.sectionTitle}>Minha trajetória</Text>

            <View style={styles.summaryCard}>
              <Text style={styles.summaryText}>{profile.summary}</Text>
            </View>
          </View>
        ) : null}

        <View style={styles.section}>
          <Text style={styles.sectionEyebrow}>EM NÚMEROS</Text>

          <Text style={styles.sectionTitle}>Minha trajetória</Text>

          <View style={styles.statsContainer}>
            <StatCard
              value={profile.academicExperiences.length}
              label="Formações"
            />

            <StatCard
              value={profile.professionalExperiences.length}
              label="Experiências"
            />

            <StatCard value={profile.projects.length} label="Projetos" />
          </View>
        </View>

        <View style={styles.bottomCard}>
          <View style={styles.bottomIcon}>
            <SymbolView
              name={{
                ios: "swift",
                android: "code",
                web: "code",
              }}
              tintColor="#FFFFFF"
              size={20}
            />
          </View>

          <View style={styles.bottomContent}>
            <Text style={styles.bottomTitle}>Desenvolvedor em formação</Text>

            <Text style={styles.bottomText}>
              Estudando tecnologia, criando projetos e transformando aprendizado
              em soluções digitais.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Dados carregados da minha API REST.
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
    paddingHorizontal: 20,
    paddingTop: 28,
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
    lineHeight: 18,
    textAlign: "center",
    marginTop: 12,
  },

  heroCard: {
    flexDirection: "row",
    backgroundColor: "#18181B",
    borderWidth: 1,
    borderColor: "#27272A",
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 14,
  },

  accentLine: {
    width: 5,
    backgroundColor: "#8B5CF6",
  },

  heroContent: {
    flex: 1,
    padding: 22,
  },

  imageWrapper: {
    width: 88,
    height: 88,
    borderRadius: 44,
    padding: 3,
    backgroundColor: "#8B5CF6",
    marginBottom: 18,
  },

  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 44,
  },

  eyebrow: {
    color: "#8B5CF6",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.6,
    marginBottom: 7,
  },

  greeting: {
    color: "#71717A",
    fontSize: 16,
    marginBottom: 5,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 34,
    lineHeight: 39,
    fontWeight: "800",
  },

  roleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },

  roleDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#8B5CF6",
    marginRight: 8,
  },

  role: {
    color: "#D4D4D8",
    fontSize: 14,
    fontWeight: "600",
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 9,
  },

  location: {
    color: "#71717A",
    fontSize: 13,
    marginLeft: 6,
  },

  socialSection: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 34,
  },

  socialButton: {
    flex: 1,
    minHeight: 48,
    backgroundColor: "#8B5CF6",
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  linkedinButton: {
    backgroundColor: "#27272A",
    borderWidth: 1,
    borderColor: "#3F3F46",
  },

  socialButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  buttonPressed: {
    opacity: 0.7,
  },

  section: {
    marginBottom: 30,
  },

  sectionEyebrow: {
    color: "#8B5CF6",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 5,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 14,
  },

  summaryCard: {
    backgroundColor: "#121214",
    borderWidth: 1,
    borderColor: "#27272A",
    borderRadius: 18,
    padding: 18,
  },

  summaryText: {
    color: "#A1A1AA",
    fontSize: 15,
    lineHeight: 24,
  },

  statsContainer: {
    flexDirection: "row",
    gap: 10,
  },

  bottomCard: {
    flexDirection: "row",
    backgroundColor: "#18181B",
    borderWidth: 1,
    borderColor: "#27272A",
    borderRadius: 18,
    padding: 16,
    marginBottom: 28,
  },

  bottomIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#8B5CF6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  bottomContent: {
    flex: 1,
  },

  bottomTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 5,
  },

  bottomText: {
    color: "#71717A",
    fontSize: 13,
    lineHeight: 20,
  },

  footer: {
    alignItems: "center",
  },

  footerText: {
    color: "#3F3F46",
    fontSize: 11,
  },
});
