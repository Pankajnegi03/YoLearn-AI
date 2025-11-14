import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import {
    FlatList,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { AppBackground } from "@/components/AppBackground";
import { CategoryChip } from "@/components/CategoryChip";
import { SearchBar } from "@/components/SearchBar";
import { HomeStackParamList } from "@/navigation/types";
import { Colors, spacing } from "@/theme";
import Voice from "../../assets/images/voice-background.png";

const SEARCH_RESULTS = [
  {
    id: 1,
    title: "Machine Learning Fundamentals",
    subtitle: "Mr. Bruno Almeida • 12/09/2025",
  },
  {
    id: 2,
    title: "Quantum Computing",
    subtitle: "Mr. Alex Novak • 12/09/2025",
  },
  {
    id: 3,
    title: "Large Language Models",
    subtitle: "Ms. Priya Sharma • 11/09/2025",
  },
  {
    id: 4,
    title: "Work, Energy and Power",
    subtitle: "Mr. Ayan Desai • 10/09/2025",
  },
  {
    id: 5,
    title: "Quantum Computing",
    subtitle: "Mr. Alex Novak • 12/09/2025",
  },
  {
    id: 6,
    title: "Large Language Models",
    subtitle: "Ms. Priya Sharma • 11/09/2025",
  },
  {
    id: 7,
    title: "Work, Energy and Power",
    subtitle: "Mr. Ayan Desai • 10/09/2025",
  },
];

const CATEGORIES = ["Learn a Concept", "AI Tools", "Quiz", "AI Avatars"];

export function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  return (
    <AppBackground>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerRow}>
          <Pressable
            style={styles.roundButton}
            onPress={() => navigation.navigate("Library")}
          >
            <MaterialIcons
              name="menu-book"
              size={20}
              color={Colors.textPrimary}
            />
          </Pressable>
          <View style={styles.voiceBadge}>
            <MaterialIcons
              name="graphic-eq"
              size={18}
              color={Colors.textPrimary}
            />
            <Text style={styles.voiceLabel}>Voice</Text>
          </View>
          <View style={styles.roundButton}>
            <MaterialIcons name="menu" size={20} color={Colors.textPrimary} />
          </View>
        </View>

        <View style={styles.micSection}>
          <Pressable
            onPress={() =>
              navigation.navigate("Chat", { topic: "How can you help me?" })
            }
          >
            <Image
              source={Voice}
              style={{
                height: 250,
                width: 250,
              }}
            />
          </Pressable>
          <Text style={styles.brandLabel}>Yo</Text>
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
        <View style={styles.chipsRow}>
          {CATEGORIES.map((category) => (
            <CategoryChip
              key={category}
              label={category}
              active={category === selectedCategory}
              onPress={() => setSelectedCategory(category)}
            />
          ))}
        </View>

        <View style={styles.suggestionsCard}>
          <FlatList
            data={SEARCH_RESULTS}
            keyExtractor={(item) => item.id.toString()}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={true}
            style={{ maxHeight: 152 }}
            renderItem={({ item }) => (
              <View style={styles.suggestionRow}>
                <MaterialIcons name="search" size={16} color={"#B7B7B7"} />
                <Text style={styles.suggestionTitle}>{item.title}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: spacing.xxl * 2,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.xxl,
  },
  roundButton: {
    width: 44,
    height: 44,
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
  },
  micSection: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.xl,
  },
  brandLabel: {
    color: Colors.textPrimary,
    fontSize: 16,
    letterSpacing: 2,
    textAlign: "center",
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
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginVertical: 13,
  },
  suggestionsCard: {
    backgroundColor: "rgba(255, 255, 255, 0.34)",
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    // marginBottom: spacing.xl,
  },
  suggestionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    gap: 8,
  },
  suggestionTitle: {
    color: "#B7B7B7",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 22,
  },
  sectionLabel: {
    color: Colors.textSecondary,
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: spacing.md,
  },
});
