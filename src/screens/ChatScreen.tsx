import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { AppBackground } from '@/components/AppBackground';
import { ChatHeader } from '@/components/ChatHeader';
import { ChatChip } from '@/components/ChatChip';
import { HomeStackParamList } from '@/navigation/types';
import { Colors, spacing } from '@/theme';
import Copy from '../../assets/images/Copy.png';
import Share from '../../assets/images/Share.png';
import Refresh from '../../assets/images/Refresh.png';

type Props = NativeStackScreenProps<HomeStackParamList, 'Chat'>;

export function ChatScreen({ route }: Props) {
  const bottomInset = useBottomTabBarHeight();
  const styles = createStyles(bottomInset);

  return (
    <AppBackground>
      <ChatHeader />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.input}>
          <ChatChip
          variant="primary"
          text="What is Quantum Mechanics?"
          onClick={() => {}}
        
        />
        </View>
        <View>
          <Text style={styles.title}>
            Quantum mechanics is a fundamental theory in physics that describes
            the behavior of matter and light at very small scales, such as
            atoms and subatomic particles. Unlike classical physics, which works
            well for large objects we encounter in everyday life, quantum
            mechanics explains phenomena that classical theories cannot, such as
            the discrete energy levels of atoms and the dual nature of particles
            as both waves and particles.
          </Text>

          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={Copy}
                style={{
                  height: 16,
                  width: 16,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={Share}
                style={{
                  height: 16,
                  width: 16,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={Refresh}
                style={{
                  height: 16,
                  width: 16,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>

        <ChatChip
          variant="secondary"
          text="Help me memorise it"
          onClick={() => {}}
        />

        <ChatChip
          variant="secondary"
          text="Help me memorise it"
          onClick={() => {}}
        />
      </View>

    </AppBackground>
  );
}

function createStyles(bottomInset: number) {
  return StyleSheet.create({
    content: {
      gap: 20,
      padding: spacing.lg,
    },
    actionsRow: {
      flexDirection: 'row',
      marginBottom: spacing.xl,
      gap: spacing.sm,
    },
    input: {
      alignSelf:'flex-end'
    },
    messagesContainer: {
      backgroundColor: Colors.surface,
      borderRadius: 22,
      borderWidth: 1,
      borderColor: Colors.outline,
      padding: spacing.xl,
    },
    inputWrapper: {
      width: '100%',
    },
    micWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#FFFFFF',
      fontSize: 16,
      lineHeight: 22,
      marginBottom: 4,
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    iconButton: {
      padding: 8,
      borderRadius: 6,
    },
    footer:{
      flexDirection:'row',
      gap:8
    }
  })}