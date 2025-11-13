import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Companion, fetchCompanions } from '@/api/companions';
import { ActionPill } from '@/components/ActionPill';
import { AppBackground } from '@/components/AppBackground';
import { CategoryChip } from '@/components/CategoryChip';
import { ChatInput } from '@/components/ChatInput';
import { ScreenHeader } from '@/components/ScreenHeader';
import { SearchBar } from '@/components/SearchBar';
import { SectionHeading } from '@/components/SectionHeading';
import { HomeStackParamList } from '@/navigation/types';
import { Colors, spacing } from '@/theme';

type Props = NativeStackScreenProps<HomeStackParamList, 'Companion'>;

export function CompanionScreen({ route, navigation }: Props) {
  const [search, setSearch] = useState('');
  const [companions, setCompanions] = useState<Companion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { companionId } = route.params;

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        const result = await fetchCompanions();
        if (isMounted) {
          setCompanions(result);
        }
      } catch {
        if (isMounted) {
          setError('Unable to load companions right now.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const selectedCompanion = useMemo(() => {
    return companions.find((companion) => companion.id === companionId) ?? companions[0];
  }, [companions, companionId]);

  return (
    <AppBackground>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <ScreenHeader
          title={route.params.name}
          subtitle={route.params.specialization}
          trailing={<ActionPill label="Switch Companion" onPress={() => navigation.goBack()} />}
        />

        {selectedCompanion ? (
          <View style={styles.portraitCard}>
            <Image source={{ uri: selectedCompanion.avatar }} style={styles.avatar} />
            <Text style={styles.primaryText}>{selectedCompanion.name}</Text>
            <Text style={styles.secondaryText}>{selectedCompanion.specialization}</Text>
          </View>
        ) : null}

        <View style={styles.sectionSpacing}>
          <SearchBar
            placeholder="I would like to learn about..."
            value={search}
            onChangeText={setSearch}
            accessory={null}
          />
          <View style={styles.chipsRow}>
            {['Learn a Concept', 'AI Tools', 'Quiz', 'AI Avatars'].map((category) => (
              <CategoryChip key={category} label={category} active={category === 'Learn a Concept'} />
            ))}
          </View>
        </View>

        <SectionHeading title="Available Companions" />

        {loading && (
          <View style={styles.stateContainer}>
            <ActivityIndicator color={Colors.accent} />
            <Text style={styles.stateText}>Connecting with Yo companions…</Text>
          </View>
        )}

        {error && !loading ? (
          <View style={styles.stateContainer}>
            <Text style={styles.stateText}>{error}</Text>
          </View>
        ) : null}

        {companions.map((companion) => (
          <View key={companion.id} style={styles.companionRow}>
            <Image source={{ uri: companion.avatar }} style={styles.rowAvatar} />
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowTitle}>{companion.name}</Text>
              <Text style={styles.rowSubtitle}>{companion.specialization}</Text>
            </View>
            <ActionPill
              label="Chat"
              onPress={() =>
                navigation.navigate('Chat', {
                  topic: `Learn with ${companion.name}`,
                })
              }
            />
          </View>
        ))}

        <View style={styles.chatInputSection}>
          <ChatInput value={search} onChangeText={setSearch} placeholder="I would like to learn about..." />
        </View>
      </ScrollView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: spacing.xxl * 2,
  },
  portraitCard: {
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.outline,
    paddingVertical: spacing.xxl,
    marginBottom: spacing.xl,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: spacing.lg,
  },
  primaryText: {
    color: Colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: spacing.sm,
  },
  secondaryText: {
    color: Colors.textSecondary,
  },
  sectionSpacing: {
    marginBottom: spacing.xl,
  },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  stateContainer: {
    paddingVertical: spacing.xl,
    alignItems: 'center',
  },
  stateText: {
    color: Colors.textSecondary,
    marginTop: spacing.sm,
  },
  companionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.outline,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.md,
  },
  rowAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginRight: spacing.lg,
  },
  rowTextContainer: {
    flex: 1,
  },
  rowTitle: {
    color: Colors.textPrimary,
    fontWeight: '600',
    fontSize: 16,
    marginBottom: spacing.xs,
  },
  rowSubtitle: {
    color: Colors.textSecondary,
    fontSize: 13,
  },
  chatInputSection: {
    marginTop: spacing.xxl,
  },
});

