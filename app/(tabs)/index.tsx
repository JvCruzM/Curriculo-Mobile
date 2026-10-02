import { Linking, Image, Pressable, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Text, View } from '@/components/Themed';

export default function HomeScreen() {
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
          <View style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/206948909?v=4',
              }}
              style={styles.profileImage}
            />
          </View>

          <Text style={styles.greeting}>Olá, eu sou</Text>

          <Text style={styles.name}>João Vitor</Text>
          <Text style={styles.name}>Cruz de Menezes</Text>

          <Text style={styles.role}>Sistemas para Internet</Text>

          <Text style={styles.location}>Recife - PE</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre mim</Text>

          <Text style={styles.description}>
            Profissional com experiência nas áreas de logística e administração,
            atualmente direcionando minha formação para Tecnologia da
            Informação, com foco no desenvolvimento de sistemas e soluções
            digitais.
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Formações</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Experiências</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Projetos</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conheça meu trabalho</Text>

          <View style={styles.buttonsContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.socialButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() =>
                openLink('https://github.com/JvCruzM')
              }
            >
              <Text style={styles.socialButtonText}>GitHub</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.socialButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() =>
                openLink('https://www.linkedin.com/in/jvcruzm/')
              }
            >
              <Text style={styles.socialButtonText}>LinkedIn</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Portfólio desenvolvido com React Native + Expo
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090B',
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 40,
  },

  hero: {
    alignItems: 'flex-start',
  },

  imageWrapper: {
    width: 92,
    height: 92,
    borderRadius: 46,
    padding: 3,
    backgroundColor: '#8B5CF6',
    marginBottom: 24,
  },

  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 46,
  },

  greeting: {
    color: '#A1A1AA',
    fontSize: 18,
    marginBottom: 8,
  },

  name: {
    color: '#FFFFFF',
    fontSize: 38,
    lineHeight: 42,
    fontWeight: '800',
  },

  role: {
    color: '#8B5CF6',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 18,
  },

  location: {
    color: '#A1A1AA',
    fontSize: 15,
    marginTop: 6,
  },

  divider: {
    height: 1,
    backgroundColor: '#27272A',
    marginVertical: 28,
  },

  section: {
    marginBottom: 28,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },

  description: {
    color: '#A1A1AA',
    fontSize: 15,
    lineHeight: 24,
  },

  statsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 32,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#18181B',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  statNumber: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 4,
  },

  statLabel: {
    color: '#A1A1AA',
    fontSize: 12,
    textAlign: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
    gap: 12,
  },

  socialButton: {
    flex: 1,
    backgroundColor: '#8B5CF6',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },

  socialButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  buttonPressed: {
    opacity: 0.7,
  },

  footer: {
    alignItems: 'center',
    paddingTop: 10,
  },

  footerText: {
    color: '#52525B',
    fontSize: 12,
    textAlign: 'center',
  },
});