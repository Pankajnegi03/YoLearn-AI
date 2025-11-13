import { StyleSheet, Text, View } from 'react-native';

import { Colors, spacing } from '@/theme';

type SectionHeadingProps = {
  title: string;
  action?: React.ReactNode;
};

export function SectionHeading({ title, action }: SectionHeadingProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {action}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  title: {
    color: Colors.textSecondary,
    fontSize: 14,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});

