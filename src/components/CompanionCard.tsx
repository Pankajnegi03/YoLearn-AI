import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors, spacing } from '@/theme';

type CompanionCardProps = {
  name: string;
  subject: string;
  avatarUrl: string;
  onPress?: () => void;
};

export function CompanionCard({ name, subject, avatarUrl, onPress }: CompanionCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subject}>{subject}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.outline,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: spacing.lg,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  subject: {
    color: Colors.textSecondary,
    fontSize: 13,
  },
});

