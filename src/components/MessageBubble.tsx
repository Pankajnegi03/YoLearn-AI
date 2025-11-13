import { StyleSheet, Text, View } from 'react-native';

import { Colors, spacing } from '@/theme';

type MessageBubbleProps = {
  text: string;
  variant?: 'assistant' | 'user';
};

export function MessageBubble({ text, variant = 'assistant' }: MessageBubbleProps) {
  return (
    <View style={[styles.bubble, variant === 'user' ? styles.userBubble : styles.assistantBubble]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    borderRadius: 18,
    marginBottom: spacing.md,
    maxWidth: '90%',
    borderWidth: 1,
    borderColor: Colors.outline,
  },
  assistantBubble: {
    backgroundColor: Colors.surface,
    alignSelf: 'flex-start',
  },
  userBubble: {
    backgroundColor: Colors.surfaceSecondary,
    alignSelf: 'flex-end',
  },
  text: {
    color: Colors.textPrimary,
    fontSize: 15,
    lineHeight: 22,
  },
});

