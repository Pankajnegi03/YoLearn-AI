import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors, spacing } from "@/theme";

type SegmentedTabsProps = {
  tabs: string[];
  activeIndex: number;
  onChange: (index: number) => void;
};

export function SegmentedTabs({
  tabs,
  activeIndex,
  onChange,
}: SegmentedTabsProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = index === activeIndex;
        return (
          <Pressable
            key={tab}
            style={[
              styles.tab,
              isActive ? styles.activeTab : styles.inactiveTab,
            ]}
            onPress={() => onChange(index)}
          >
            <Text style={isActive ? styles.activeLabel : styles.inactiveLabel}>
              {tab}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: "#03c1c0",
  },
  inactiveTab: {
    backgroundColor: "transparent",
  },
  activeLabel: {
    color: "#ffff",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
  },
  inactiveLabel: {
    color: "#b7b7b7",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
  },
});
