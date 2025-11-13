import { MaterialIcons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { Colors, spacing } from "@/theme";

type SearchBarProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export function SearchBar({
  placeholder,
  value,
  onChangeText,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#B7B7B7"}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    borderRadius: 24,
    backgroundColor: "#69696999",
    borderWidth: 1,
    borderColor: "#4CCFD7",
    flex:1
  },
  input: {
    flex: 1,
    color: "#B7B7B7",
    fontSize: 15,
  },
});
