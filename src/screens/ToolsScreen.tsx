import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { AppBackground } from "@/components/AppBackground";
import { SearchBar } from "@/components/SearchBar";
import { SegmentedTabs } from "@/components/SegmentedTabs";
import { ToolCard } from "@/components/ToolCard";
import { Colors, spacing, typography } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { SEARCH_BAR_PRESET } from "@/constants";

const TOOL_CATEGORIES = ["Plan", "Learn", "Practise", "Revise", "Analyze"];

const TOOL_ITEMS = [
  {
    id: "learn-topic",
    title: "Learn Topic",
    subtitle: "Deep dive into specific learning topics",
  },
  {
    id: "concept-map",
    title: "Concept Map Generator",
    subtitle: "Create dynamic educational diagrams & concept maps",
  },
  {
    id: "quiz",
    title: "Quiz Builder",
    subtitle: "Generate quick assessments to evaluate understanding",
  },
];

export function ToolsScreen() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  return (
    <AppBackground>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>Tools</Text>
        <SearchBar
          placeholder="Search companions by name"
          value={search}
          onChangeText={setSearch}
          primaryIcon={
            <MaterialIcons name="search" size={20} color="#B7B7B7" />
          }
          preset={SEARCH_BAR_PRESET.SECONDARY}
        />
        <View style={styles.tabsContainer}>
          <SegmentedTabs
            tabs={TOOL_CATEGORIES}
            activeIndex={activeTab}
            onChange={setActiveTab}
          />
        </View>
        <View style={styles.cardsContainer}>
          {TOOL_ITEMS.map((tool) => (
            <ToolCard
              key={tool.id}
              title={tool.title}
              subtitle={tool.subtitle}
            />
          ))}
        </View>
      </ScrollView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: spacing.xxl * 2,
  },
  title: {
    ...typography.title,
    color: Colors.textPrimary,
    flex: 1,
  },
  tabsContainer: {
    marginTop: 8,
    marginBottom: 24,
  },
  cardsContainer: {
    gap: 12,
  },
});
