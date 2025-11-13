import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

import { Colors, spacing } from '@/theme';

type IconButtonProps = {
  name: keyof typeof MaterialIcons.glyphMap;
  onPress?: () => void;
  style?: ViewStyle;
  size?: number;
};

export function IconButton({ name, onPress, style, size = 20 }: IconButtonProps) {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <MaterialIcons name={name} color={Colors.textPrimary} size={size} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.outline,
    marginLeft: spacing.sm,
  },
});

