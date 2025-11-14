import { Pressable, StyleSheet, Text } from "react-native";

type CategoryChipProps = {
  label: string;
  active?: boolean;
  onPress?: () => void;
};

export function CategoryChip({
  label,
  active = false,
  onPress,
}: CategoryChipProps) {
  return (
    <Pressable
      onPress={onPress}
      style={active ? styles.activeWrapper : styles.inactiveChip}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  activeWrapper: {
    borderColor: "#4ABCBC",
    borderRadius: 34,
    borderWidth: 1,
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  inactiveChip: {
    backgroundColor: "rgba(255, 255, 255, 0.34)",
    borderRadius: 34,
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    color: "#B7B7B7",
    fontWeight: "400",
    fontSize: 14,
  },
});
