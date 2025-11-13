import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors, Gradients } from '@/theme';

type GradientBackgroundProps = {
  children: ReactNode;
  variant?: 'default' | 'home';
};

export function GradientBackground({ children, variant = 'default' }: GradientBackgroundProps) {
  return (
    <LinearGradient
      colors={variant === 'home' ? Gradients.home : Gradients.screen}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.9, y: 1 }}
      style={styles.container}>
      <View style={styles.overlay} />
      {variant === 'home' ? (
        <>
          <LinearGradient
            colors={Gradients.homeHalo}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.homeHalo}
          />
          <LinearGradient
            colors={Gradients.homeCore}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.homeCore}
          />
        </>
      ) : null}
      <View style={[styles.content, variant === 'home' ? styles.homeContent : null]}>{children}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.background,
    opacity: 0.35,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 32,
  },
  homeContent: {
    paddingHorizontal: 20,
    paddingTop: 44,
  },
  homeHalo: {
    position: 'absolute',
    top: '12%',
    alignSelf: 'center',
    width: 420,
    height: 420,
    borderRadius: 210,
    opacity: 0.75,
    transform: [{ scaleX: 1.35 }],
  },
  homeCore: {
    position: 'absolute',
    top: '20%',
    alignSelf: 'center',
    width: 260,
    height: 260,
    borderRadius: 130,
    opacity: 0.95,
    transform: [{ scaleX: 1.18 }],
  },
});

