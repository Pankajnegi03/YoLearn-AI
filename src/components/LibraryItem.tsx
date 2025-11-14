import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Colors, spacing } from "@/theme";

type LibraryItemProps = {
  title: string;
  mentor: string;
  date: string;
  isExpanded?: boolean;
  isLast?: boolean;
  onPress?: () => void;
};

export function LibraryItem({
  title,
  mentor,
  date,
  isExpanded = false,
  isLast = false,
  onPress,
}: LibraryItemProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.meta}>
          {mentor} • {date}
        </Text>
      </View>
      {isExpanded && (
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
            <Text style={styles.actionLabel}>View</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
            <Text style={styles.actionLabel}>Notes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
            <Text style={styles.actionLabel}>Recap</Text>
          </TouchableOpacity>
        </View>
      )}
      {!isLast && <View style={styles.divider} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
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
  },
  actionButton: {
    paddingVertical: 4,
    paddingHorizontal: spacing.md,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.outline,
    alignItems: "center",
    backgroundColor: "#d9d9d9",
  },
  actionLabel: {
    color: "#072b4b",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    marginTop: 12,
  },
});
