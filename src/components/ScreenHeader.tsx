import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, spacing, typography } from '@/theme';

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  trailing?: ReactNode;
  leading?: ReactNode;
};

export function ScreenHeader({ title, subtitle, trailing, leading }: ScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        {leading}
        <Text style={styles.title}>{title}</Text>
      </View>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      {trailing ? <View style={styles.trailing}>{trailing}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.xl,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...typography.title,
    color: Colors.textPrimary,
    flex: 1,
  },
  subtitle: {
    color: Colors.textSecondary,
    marginTop: spacing.xs,
    fontSize: 15,
  },
  trailing: {
    marginTop: spacing.md,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

