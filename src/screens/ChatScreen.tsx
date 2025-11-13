import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ActionPill } from '@/components/ActionPill';
import { AppBackground } from '@/components/AppBackground';
import { ChatInput } from '@/components/ChatInput';
import { MessageBubble } from '@/components/MessageBubble';
import { MicButton } from '@/components/MicButton';
import { ScreenHeader } from '@/components/ScreenHeader';
import { HomeStackParamList } from '@/navigation/types';
import { Colors, spacing } from '@/theme';

const MESSAGES = [
  {
    id: 'question',
    text: 'What is Quantum Mechanics?',
    variant: 'assistant' as const,
  },
  {
    id: 'answer',
    text: `Quantum mechanics is a fundamental theory in physics that describes the behavior of matter and energy at atomic and subatomic scales, where classical physics fails to explain phenomena accurately.`,
    variant: 'assistant' as const,
  },
  {
    id: 'follow-up',
    text: 'Sure! I will explain more about subatomic particles before we move forward.',
    variant: 'user' as const,
  },
];

type Props = NativeStackScreenProps<HomeStackParamList, 'Chat'>;

export function ChatScreen({ route }: Props) {
  const [message, setMessage] = useState(route.params.topic ?? '');
  const bottomInset = useBottomTabBarHeight();
  const styles = createStyles(bottomInset);

  return (
    <AppBackground>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <ScreenHeader title="YoTutor" />

        <View style={styles.actionsRow}>
          <ActionPill label="Draw a Mindmap" />
          <ActionPill label="Help me memorise it" />
        </View>

        <View style={styles.messagesContainer}>
          {MESSAGES.map((item) => (
            <MessageBubble key={item.id} text={item.text} variant={item.variant} />
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.inputWrapper}>
          <ChatInput value={message} onChangeText={setMessage} />
        </View>
        <View style={styles.micWrapper}>
          <MicButton />
        </View>
      </View>
    </AppBackground>
  );
}

function createStyles(bottomInset: number) {
  return StyleSheet.create({
    content: {
      paddingBottom: spacing.xxl * 4,
    },
    actionsRow: {
      flexDirection: 'row',
      marginBottom: spacing.xl,
      gap: spacing.sm,
    },
    messagesContainer: {
      backgroundColor: Colors.surface,
      borderRadius: 22,
      borderWidth: 1,
      borderColor: Colors.outline,
      padding: spacing.xl,
    },
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: bottomInset + 24,
      alignItems: 'center',
      gap: spacing.lg,
    },
    inputWrapper: {
      width: '100%',
    },
    micWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}

