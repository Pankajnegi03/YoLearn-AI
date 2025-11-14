import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { AppBackground } from "@/components/AppBackground";
import { ChatChip } from "@/components/ChatChip";
import { ChatHeader } from "@/components/ChatHeader";
import { SearchBar } from "@/components/SearchBar";
import { RootStackParamList } from "@/navigation/types";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import Copy from "../../assets/images/Copy.png";
import Refresh from "../../assets/images/Refresh.png";
import Share from "../../assets/images/Share.png";

type Props = NativeStackScreenProps<RootStackParamList, "Chat">;

export function ChatScreen({ navigation }: Props) {
  const [query, setQuery] = useState("");

  return (
    <AppBackground>
      <ChatHeader onClose={() => navigation.goBack()} />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.input}>
          <ChatChip
            variant="primary"
            text="What is Quantum Mechanics?"
            onClick={() => {}}
          />
        </View>
        <View>
          <Text style={styles.title}>
            Quantum mechanics is a fundamental theory in physics that describes
            the behavior of matter and light at very small scales, such as atoms
            and subatomic particles. Unlike classical physics, which works well
            for large objects we encounter in everyday life, quantum mechanics
            explains phenomena that classical theories cannot, such as the
            discrete energy levels of atoms and the dual nature of particles as
            both waves and particles.
          </Text>

          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={Copy} style={styles.iconImage} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
              <Image source={Share} style={styles.iconImage} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
              <Image source={Refresh} style={styles.iconImage} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <ChatChip
          variant="secondary"
          text="Help me memorise it"
          onClick={() => {}}
        />

        <ChatChip
          variant="secondary"
          text="Help me memorise it"
          onClick={() => {}}
        />
      </View>
      <View style={styles.inputRow}>
        <View style={styles.attachmentButton}>
          <MaterialIcons name="attach-file" size={22} color={"#000000"} />
        </View>
        <SearchBar
          placeholder="Ask anything"
          value={query}
          onChangeText={setQuery}
          primaryIcon={
            <MaterialIcons name="graphic-eq" size={20} color="white" />
          }
          secondaryIcon={
            <MaterialIcons name="videocam" size={20} color="white" />
          }
        />
      </View>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 20,
  },
  input: {
    alignSelf: "flex-end",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 4,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconButton: {
    padding: 8,
    borderRadius: 6,
  },
  footer: {
    flexDirection: "row",
    gap: 8,
  },
  iconImage: {
    height: 16,
    width: 16,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginTop: 16,
  },
  attachmentButton: {
    height: 35,
    width: 35,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
