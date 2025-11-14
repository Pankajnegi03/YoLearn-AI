import { MaterialIcons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Book from "../../assets/images/book.png";

import { Colors, spacing } from "@/theme";

type ToolCardProps = {
  title: string;
  subtitle: string;
  onPress?: () => void;
};

export function ToolCard({ title, subtitle, onPress }: ToolCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Image source={Book} style={styles.icon} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <MaterialIcons
        name="chevron-right"
        size={20}
        color={Colors.textSecondary}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0e3a3b",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#5c7878",
    paddingLeft: 20,
    paddingRight: 10,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textContainer: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 6,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: "500",
  },

  subtitle: {
    color: "#cccccc",
    fontSize: 13,
    fontWeight: "400",
    flexWrap: "wrap",
  },
});
