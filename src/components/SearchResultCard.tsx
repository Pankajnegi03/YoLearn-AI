import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors, spacing } from '@/theme';

type SearchResultCardProps = {
  title: string;
  subtitle: string;
  onPress?: () => void;
};

export function SearchResultCard({ title, subtitle, onPress }: SearchResultCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={20} color={Colors.textSecondary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.outline,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  textContainer: {
    flex: 1,
    marginRight: spacing.lg,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  subtitle: {
    color: Colors.textMuted,
    fontSize: 13,
  },
});

