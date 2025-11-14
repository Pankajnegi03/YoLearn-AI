import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { AppBackground } from "@/components/AppBackground";
import { SearchBar } from "@/components/SearchBar";
import { HomeStackParamList } from "@/navigation/types";
import { Colors, spacing } from "@/theme";
import { useState } from "react";
import CompanionImage from "../../assets/images/companion.png";

const COMPANION = {
  name: "Mr Alex",
  avatar: CompanionImage,
};

const FEATURE_BADGE_GRADIENT: [string, string] = ["#451b66", "#f55f8d"];

export function CompanionScreen({
  navigation,
}: NativeStackScreenProps<HomeStackParamList, "Companion">) {
  const [query, setQuery] = useState("");

  return (
    <AppBackground variant="home">
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <View style={styles.headerColumn}>
            <Pressable
              style={styles.circleButton}
              onPress={() => {
                const rootNavigation = navigation.getParent()?.getParent();
                if (rootNavigation) {
                  rootNavigation.navigate("Library");
                }
              }}
            >
              <MaterialIcons
                name="menu-book"
                size={22}
                color={Colors.textSecondary}
              />
            </Pressable>

            <LinearGradient
              colors={FEATURE_BADGE_GRADIENT}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.featureBadge}
            />
          </View>

          <View style={styles.chip}>
            <Text style={styles.chipText}>{COMPANION.name}</Text>
          </View>

          <View style={styles.headerColumn}>
            <Pressable style={styles.circleButton}>
              <MaterialIcons
                name="menu"
                size={22}
                color={Colors.textSecondary}
              />
            </Pressable>
            <Pressable style={styles.circleButton}>
              <MaterialIcons
                name="graphic-eq"
                size={22}
                color={Colors.textSecondary}
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.heroSection}>
          <Image source={COMPANION.avatar} style={styles.heroAvatar} />
          <Text style={styles.heroName}>{COMPANION.name}</Text>
        </View>

        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeMessage}>
            Welcome, Sarthak! What would you like to learn today?
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
            <SearchBar
              placeholder="I would like to learn about..."
              value={query}
              onChangeText={setQuery}
            />
            <View
              style={{
                height: 35,
                width: 35,
                backgroundColor: "#D9D9D9",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
              }}
            >
              <MaterialIcons name="attach-file" size={22} color={"#000000"} />
            </View>
          </View>
        </View>
      </View>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerColumn: {
    gap: spacing.md,
  },
  circleButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.18)",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(5, 18, 31, 0.45)",
  },
  featureBadge: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.25)",
  },
  chip: {
    minWidth: 120,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: spacing.xl,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.22)",
    backgroundColor: "rgba(0, 0, 0, 0.35)",
  },
  chipText: {
    textAlign: "center",
    color: Colors.textPrimary,
    fontWeight: "600",
    fontSize: 16,
  },
  heroSection: {
    alignItems: "center",
    marginTop: spacing.xxl * 1.3,
    marginBottom: spacing.xxl,
    gap: spacing.md,
  },
  heroAvatar: {
    height: 200,
    width: 200,
  },
  heroName: {
    color: Colors.textPrimary,
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 22,
  },
  welcomeCard: {
    backgroundColor: Colors.surfaceGlass,
    borderRadius: 34,
    borderWidth: 1,
    borderColor: "#F6F6F6",
    paddingHorizontal: 22,
    paddingVertical: 20,
  },
  welcomeMessage: {
    color: Colors.textPrimary,
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 13,
    lineHeight: 26,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  searchField: {
    flex: 1,
    borderRadius: 22,
    paddingVertical: 14,
    paddingHorizontal: spacing.lg,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
  },
  searchPlaceholder: {
    color: Colors.textSecondary,
    fontSize: 15,
  },
  attachmentButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(217, 217, 217, 0.92)",
    justifyContent: "center",
    alignItems: "center",
  },
});
