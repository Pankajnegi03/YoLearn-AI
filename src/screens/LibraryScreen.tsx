import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { AppBackground } from "@/components/AppBackground";
import { LibraryItem } from "@/components/LibraryItem";
import { RootStackParamList } from "@/navigation/types";
import { Colors } from "@/theme";
import Hamburger from "../../assets/images/Hamburger.png";

type Props = NativeStackScreenProps<RootStackParamList, "Library">;

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
        <TouchableOpacity style={styles.button}>
          <MaterialIcons
            name="menu-book"
            size={18}
            color={Colors.textPrimary}
          />
          <Text style={styles.buttonTitle}>Library</Text>
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="close" size={32} color={Colors.textPrimary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={Hamburger} style={styles.hamburgerImage} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.secondaryButtonTitle}>Notes</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {TOPICS.map((topic, index) => (
          <LibraryItem
            key={topic.id}
            title={topic.title}
            mentor={topic.mentor}
            date={topic.date}
            isExpanded={expandedId === topic.id}
            isLast={index === TOPICS.length - 1}
            onPress={() =>
              setExpandedId(expandedId === topic.id ? null : topic.id)
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
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    padding: 10,
    borderRadius: 24,
    backgroundColor: "#082424",
    borderWidth: 1,
    borderColor: Colors.outline,
    minHeight: 45,
  },
  buttonTitle: {
    color: Colors.textPrimary,
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 22,
  },
  secondaryButtonTitle: {
    color: Colors.textPrimary,
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 22,
  },
  headerIcons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  iconButton: {
    width: 45,
    height: 45,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0a2726",
  },
  content: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  hamburgerImage: {
    height: 13,
    width: 24,
  },
});
