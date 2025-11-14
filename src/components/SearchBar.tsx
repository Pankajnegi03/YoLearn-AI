import { StyleSheet, TextInput, View } from "react-native";

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
    paddingHorizontal: 16,
    borderRadius: 26,
    backgroundColor: "#69696999",
    borderWidth: 1,
    borderColor: "#4CCFD7",
    flex: 1,
    minHeight: 44,
    justifyContent: "center",
  },
  input: {
    flex: 1,
    color: "#B7B7B7",
    fontSize: 15,
    paddingVertical: 0,
  },
});
