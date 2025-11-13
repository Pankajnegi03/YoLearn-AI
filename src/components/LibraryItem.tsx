import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors, spacing } from '@/theme';

type LibraryItemProps = {
  title: string;
  mentor: string;
  date: string;
  onView?: () => void;
  onNotes?: () => void;
  onRecap?: () => void;
};

export function LibraryItem({ title, mentor, date, onView, onNotes, onRecap }: LibraryItemProps) {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.meta}>
          {mentor} • {date}
        </Text>
      </View>
      <View style={styles.actionsRow}>
        <Pressable style={styles.actionButton} onPress={onView}>
          <Text style={styles.actionLabel}>View</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={onNotes}>
          <Text style={styles.actionLabel}>Notes</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={onRecap}>
          <Text style={styles.actionLabel}>Recap</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.outline,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.md,
  },
  textContainer: {
    marginBottom: spacing.md,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  meta: {
    color: Colors.textSecondary,
    fontSize: 13,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  actionButton: {
    flex: 1,
    paddingVertical: spacing.sm,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.outline,
    alignItems: 'center',
    backgroundColor: Colors.surfaceSecondary,
  },
  actionLabel: {
    color: Colors.textPrimary,
    fontWeight: '600',
    fontSize: 14,
  },
});

