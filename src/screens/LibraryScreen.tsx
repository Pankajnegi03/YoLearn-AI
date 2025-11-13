import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, View } from 'react-native';

import { GradientBackground } from '@/components/GradientBackground';
import { IconButton } from '@/components/IconButton';
import { LibraryItem } from '@/components/LibraryItem';
import { ScreenHeader } from '@/components/ScreenHeader';
import { SectionHeading } from '@/components/SectionHeading';
import { HomeStackParamList } from '@/navigation/types';
import { spacing } from '@/theme';

type Props = NativeStackScreenProps<HomeStackParamList, 'Library'>;

const TOPICS = [
  {
    id: 'thermo',
    title: 'Advanced Thermodynamics Principles',
    mentor: 'Mr. Bruno Almeida',
    date: '12/09/2025',
  },
  {
    id: 'heat',
    title: 'Thermal Equilibrium and Heat Transfer',
    mentor: 'Mr. Alex Novak',
    date: '12/09/2025',
  },
  {
    id: 'electro',
    title: 'Electrostatic Forces and Potential',
    mentor: 'Mr. Ayan Desai',
    date: '12/09/2025',
  },
  {
    id: 'motion',
    title: 'Rotational Motion and Angular Momentum',
    mentor: 'Mr. Bruno Almeida',
    date: '12/09/2025',
  },
  {
    id: 'waves',
    title: 'Waves: Sound, Light, and Doppler Effect',
    mentor: 'Ms. Ava Carter',
    date: '10/09/2025',
  },
];

export function LibraryScreen({ navigation }: Props) {
  return (
    <GradientBackground>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <ScreenHeader
          title="Library"
          trailing={
            <View style={styles.headerActions}>
              <IconButton name="notes" onPress={() => navigation.navigate('Chat', { topic: 'Recap notes' })} />
              <IconButton name="menu" />
            </View>
          }
        />

        <SectionHeading title="Learning Topics" />

        {TOPICS.map((topic) => (
          <LibraryItem
            key={topic.id}
            title={topic.title}
            mentor={topic.mentor}
            date={topic.date}
            onView={() => navigation.navigate('Chat', { topic: topic.title })}
            onNotes={() => navigation.navigate('Chat', { topic: `Notes for ${topic.title}` })}
            onRecap={() => navigation.navigate('Chat', { topic: `Recap ${topic.title}` })}
          />
        ))}
      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: spacing.xxl * 2,
  },
  headerActions: {
    flexDirection: 'row',
  },
});

