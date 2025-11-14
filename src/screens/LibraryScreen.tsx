import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { AppBackground } from "@/components/AppBackground";
import { LibraryItem } from "@/components/LibraryItem";
import { HomeStackParamList } from "@/navigation/types";
import { Colors, spacing } from "@/theme";

type Props = NativeStackScreenProps<HomeStackParamList, "Library">;

const TOPICS = [
  {
    id: "thermo",
    title: "Advanced Thermodynamics Principles",
    mentor: "Mr. Bruno Almeida",
    date: "12/09/2025",
  },
  {
    id: "heat",
    title: "Thermal Equilibrium and Heat Transfer",
    mentor: "Mr. Arjun Desai",
    date: "12/09/2025",
  },
  {
    id: "electro",
    title: "Electrostatic Forces and Potential",
    mentor: "Mr. Alex Novak",
    date: "12/09/2025",
  },
  {
    id: "motion",
    title: "Rotational Motion and Angular Momentum",
    mentor: "Mr. Bruno Almeida",
    date: "12/09/2025",
  },
  {
    id: "chemical",
    title: "Chemical Thermodynamics: Laws and Applications",
    mentor: "Mr. Bruno Almeida",
    date: "12/09/2025",
  },
  {
    id: "waves",
    title: "Waves: Sound, Light, and Doppler Effect",
    mentor: "Mr. Arjun Desai",
    date: "12/09/2025",
  },
  {
    id: "stoichiometry",
    title: "Stoichiometry and Chemical Calculations",
    mentor: "Mr. Bruno Almeida",
    date: "12/09/2025",
  },
  {
    id: "gravitation",
    title: "Gravitation: Concepts and Applications",
    mentor: "Mr. Alex Novak",
    date: "12/09/2025",
  },
];

export function LibraryScreen({ navigation }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>("motion");

  return (
    <AppBackground>
      <View style={styles.header}>
        <Pressable style={styles.libraryButton}>
          <MaterialIcons name="menu-book" size={18} color={Colors.textPrimary} />
          <Text style={styles.libraryButtonText}>Library</Text>
        </Pressable>

        <View style={styles.headerIcons}>
          <Pressable style={styles.iconButton}>
            <MaterialIcons name="close" size={20} color={Colors.textPrimary} />
          </Pressable>
          <Pressable style={styles.iconButton}>
            <MaterialIcons name="menu" size={20} color={Colors.textPrimary} />
          </Pressable>
        </View>

        <Pressable style={styles.notesButton}>
          <Text style={styles.notesButtonText}>Notes</Text>
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {TOPICS.map((topic) => (
          <LibraryItem
            key={topic.id}
            title={topic.title}
            mentor={topic.mentor}
            date={topic.date}
            isExpanded={expandedId === topic.id}
            onPress={() =>
              setExpandedId(expandedId === topic.id ? null : topic.id)
            }
            onView={() => navigation.navigate("Chat", { topic: topic.title })}
            onNotes={() =>
              navigation.navigate("Chat", { topic: `Notes for ${topic.title}` })
            }
            onRecap={() =>
              navigation.navigate("Chat", { topic: `Recap ${topic.title}` })
            }
          />
        ))}
      </ScrollView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.md,
  },
  libraryButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: 24,
    backgroundColor: Colors.surfaceSecondary,
    borderWidth: 1,
    borderColor: Colors.outline,
  },
  libraryButtonText: {
    color: Colors.textPrimary,
    fontSize: 15,
    fontWeight: "600",
  },
  headerIcons: {
    flexDirection: "row",
    gap: spacing.md,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  notesButton: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: 24,
    backgroundColor: Colors.surfaceSecondary,
    borderWidth: 1,
    borderColor: Colors.outline,
  },
  notesButtonText: {
    color: Colors.textPrimary,
    fontSize: 15,
    fontWeight: "600",
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl * 2,
  },
});

