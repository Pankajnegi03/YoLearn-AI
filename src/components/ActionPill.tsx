import { Pressable, StyleSheet, Text } from 'react-native';

import { Colors, spacing } from '@/theme';

type ActionPillProps = {
  label: string;
  onPress?: () => void;
};

export function ActionPill({ label, onPress }: ActionPillProps) {
  return (
    <Pressable style={styles.pill} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.sm,
    borderRadius: 22,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.outline,
    marginRight: spacing.sm,
  },
  label: {
    color: Colors.textPrimary,
    fontWeight: '600',
    fontSize: 14,
  },
});

