import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

import { Colors, spacing } from '@/theme';

type ChatInputProps = {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
};

export function ChatInput({ placeholder = 'Ask anything', value, onChangeText }: ChatInputProps) {
  return (
    <View style={styles.container}>
      <MaterialIcons name="chat-bubble-outline" size={20} color={Colors.textSecondary} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.textMuted}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
      <MaterialIcons name="mic" size={20} color={Colors.textPrimary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: Colors.outline,
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
  },
  input: {
    flex: 1,
    color: Colors.textPrimary,
    fontSize: 15,
    paddingVertical: spacing.sm,
  },
});

