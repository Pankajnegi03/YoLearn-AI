import { MaterialIcons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Colors, spacing } from "@/theme";
import Hamburger from "../../assets/images/Hamburger.png";
import ShareIcon from "../../assets/images/Share.png";
import TextIcon from "../../assets/images/text.png";

type ChatHeaderProps = {
  onClose?: () => void;
};

export function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <View style={styles.headerRow}>
      <Pressable style={styles.roundButton} onPress={onClose}>
        <MaterialIcons
          name="close"
          size={24}
          color={Colors.textPrimary}
          style={{ padding: 10 }}
        />
      </Pressable>
      <View style={styles.subContainer}>
        <View style={[styles.roundButton, styles.secondaryRoundButton]}>
          <Image
            source={ShareIcon}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </View>
        <View style={styles.voiceBadge}>
          <Text style={styles.voiceLabel}>YoTutor</Text>
        </View>
        <View style={[styles.roundButton, styles.secondaryRoundButton]}>
          <Image
            source={TextIcon}
            style={{
              height: 18,
              width: 18,
            }}
          />
        </View>
      </View>
      <View style={styles.roundButton}>
        <Image
          source={Hamburger}
          style={{
            height: 13,
            width: 24,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.xxl,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  roundButton: {
    width: 45,
    height: 45,
    borderRadius: 22,
    borderWidth: 1,
    backgroundColor: "#091a1a",
    borderColor: Colors.outline,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryRoundButton: {
    width: 37,
    height: 37,
    backgroundColor: "#0c2929",
  },
  voiceBadge: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#0b2e2e",
    borderWidth: 1,
    borderColor: Colors.outline,
  },
  voiceLabel: {
    color: Colors.textPrimary,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
  },
});
