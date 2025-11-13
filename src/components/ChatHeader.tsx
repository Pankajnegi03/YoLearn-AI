import { MaterialIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

import { Colors, spacing } from "@/theme";
import  ShareIcon  from '../../assets/images/Share.png'
import  TextIcon  from '../../assets/images/text.png'
import  Hamburger  from '../../assets/images/Hamburger.png'
export function ChatHeader() {


  return (
      <View style={styles.headerRow}>
        <View style={styles.roundButton}>
          <MaterialIcons
            name="close"
            size={24}
            color={Colors.textPrimary}
            style={{padding:10}}
          />
        </View>
        <View style={styles.subContainer}>
          <View style={styles.roundButton}>
          <Image
            source={ShareIcon}
            style={{
                height: 20,
                width: 20
            }}
         />
        </View>
        <View style={styles.voiceBadge}>
          <Text style={styles.voiceLabel}>YoTutor</Text>
        </View>
        <View style={styles.roundButton}>
         <Image
            source={TextIcon}
            style={{
                height: 20,
                width: 20
            }}
         />
        </View>
        </View>
        <View style={styles.roundButton}>
          <Image
            source={Hamburger}
            style={{
                height: 13,
                width: 24
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
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:8
  },
  roundButton: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: Colors.surfaceSecondary,
    borderWidth: 1,
    borderColor: Colors.outline,
    alignItems: "center",
    justifyContent: "center",
  },
  voiceBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    backgroundColor: Colors.surfaceSecondary,
    borderWidth: 1,
    borderColor: Colors.outline,
  },
  voiceLabel: {
    color: Colors.textPrimary,
    fontWeight: "600",
    fontSize: 15,
    paddingHorizontal:16,
    paddingVertical:10,
    borderRadius: 1000
  },
});
