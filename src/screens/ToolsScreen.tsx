import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { GradientBackground } from '@/components/GradientBackground';
import { ScreenHeader } from '@/components/ScreenHeader';
import { SearchBar } from '@/components/SearchBar';
import { SegmentedTabs } from '@/components/SegmentedTabs';
import { ToolCard } from '@/components/ToolCard';
import { spacing } from '@/theme';

const TOOL_CATEGORIES = ['Plan', 'Learn', 'Practise', 'Revise', 'Analyze'];

const TOOL_ITEMS = [
  {
    id: 'learn-topic',
    title: 'Learn Topic',
    subtitle: 'Deep dive into specific learning topics',
  },
  {
    id: 'concept-map',
    title: 'Concept Map Generator',
    subtitle: 'Create dynamic educational diagrams & concept maps',
  },
  {
    id: 'quiz',
    title: 'Quiz Builder',
    subtitle: 'Generate quick assessments to evaluate understanding',
  },
];

export function ToolsScreen() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  return (
    <GradientBackground>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <ScreenHeader title="Tools" />
        <SearchBar
          placeholder="Search companions by name"
          value={search}
          onChangeText={setSearch}
          accessory={null}
        />
        <View style={styles.tabsContainer}>
          <SegmentedTabs tabs={TOOL_CATEGORIES} activeIndex={activeTab} onChange={setActiveTab} />
        </View>
        <View style={styles.cardsContainer}>
          {TOOL_ITEMS.map((tool) => (
            <ToolCard key={tool.id} title={tool.title} subtitle={tool.subtitle} />
          ))}
        </View>
      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: spacing.xxl * 2,
  },
  tabsContainer: {
    marginTop: spacing.xl,
    marginBottom: spacing.xl,
  },
  cardsContainer: {
    gap: spacing.md,
  },
});

