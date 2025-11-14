import { SEARCH_BAR_PRESET } from "@/constants";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

type SearchBarProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  primaryIcon?: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  preset?: SEARCH_BAR_PRESET;
};

export function SearchBar({
  placeholder,
  value,
  onChangeText,
  primaryIcon,
  secondaryIcon,
  preset = SEARCH_BAR_PRESET.PRIMARY,
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  const isSecondary = preset === SEARCH_BAR_PRESET.SECONDARY;

  return (
    <View
      style={[
        styles.container,
        isFocused && styles.containerFocused,
        isSecondary && styles.secondaryContainer,
      ]}
    >
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#B7B7B7"}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {(primaryIcon || secondaryIcon) && (
        <View style={styles.iconsContainer}>
          {primaryIcon && (
            <TouchableOpacity style={styles.iconWrapper}>
              {primaryIcon}
            </TouchableOpacity>
          )}
          {secondaryIcon && (
            <TouchableOpacity style={styles.iconWrapper}>
              {secondaryIcon}
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderRadius: 26,
    backgroundColor: "#69696999",
    flex: 1,
    minHeight: 44,
    justifyContent: "center",
  },
  secondaryContainer: {
    borderColor: "#627776",
    backgroundColor: "#0e3737",
  },
  containerFocused: {
    borderWidth: 1,
    borderColor: "#4CCFD7",
  },
  input: {
    flex: 1,
    color: "#B7B7B7",
    fontSize: 15,
    paddingRight: 8,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingLeft: 8,
  },
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
});
