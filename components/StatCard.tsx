import { StyleSheet, View } from 'react-native';

import { Text } from '@/components/Themed';

type StatCardProps = {
  value: number;
  label: string;
};

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#18181B',
    borderWidth: 1,
    borderColor: '#27272A',
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  value: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '800',
    marginBottom: 5,
  },

  label: {
    color: '#71717A',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
  },
});