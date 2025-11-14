import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors, spacing } from "@/theme";

type LibraryItemProps = {
  title: string;
  mentor: string;
  date: string;
  isExpanded?: boolean;
  onPress?: () => void;
  onView?: () => void;
  onNotes?: () => void;
  onRecap?: () => void;
};

export function LibraryItem({
  title,
  mentor,
  date,
  isExpanded = false,
  onPress,
  onView,
  onNotes,
  onRecap,
}: LibraryItemProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.meta}>
          {mentor} • {date}
        </Text>
      </View>
      {isExpanded && (
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
      )}
      <View style={styles.divider} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.md,
  },
  content: {
    marginBottom: spacing.sm,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: spacing.xs,
    lineHeight: 22,
  },
  meta: {
    color: Colors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
  },
  actionsRow: {
    flexDirection: "row",
    gap: spacing.sm,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  actionButton: {
    flex: 1,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.outline,
    alignItems: "center",
    backgroundColor: Colors.surfaceSecondary,
  },
  actionLabel: {
    color: Colors.textPrimary,
    fontWeight: "600",
    fontSize: 13,
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    marginTop: spacing.md,
  },
});

