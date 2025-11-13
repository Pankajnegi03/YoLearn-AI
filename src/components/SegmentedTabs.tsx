import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors, spacing } from '@/theme';

type SegmentedTabsProps = {
  tabs: string[];
  activeIndex: number;
  onChange: (index: number) => void;
};

export function SegmentedTabs({ tabs, activeIndex, onChange }: SegmentedTabsProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = index === activeIndex;
        return (
          <Pressable
            key={tab}
            style={[styles.tab, isActive ? styles.activeTab : styles.inactiveTab]}
            onPress={() => onChange(index)}>
            <Text style={isActive ? styles.activeLabel : styles.inactiveLabel}>{tab}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: 24,
    padding: spacing.xs,
    borderWidth: 1,
    borderColor: Colors.outline,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: Colors.accent,
  },
  inactiveTab: {
    backgroundColor: 'transparent',
  },
  activeLabel: {
    color: Colors.background,
    fontWeight: '600',
  },
  inactiveLabel: {
    color: Colors.textSecondary,
    fontWeight: '500',
  },
});

