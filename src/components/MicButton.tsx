import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, Pressable, StyleSheet } from 'react-native';

import { Colors, Gradients } from '@/theme';

type MicButtonProps = {
  onPress?: () => void;
  size?: number;
};

export function MicButton({ onPress, size = 140 }: MicButtonProps) {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const styles = useMemo(() => createStyles(size), [size]);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1800,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0,
          duration: 1800,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [scaleAnim]);

  const animatedStyle = {
    transform: [
      {
        scale: scaleAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.12],
        }),
      },
    ],
    opacity: scaleAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0.4, 0.85],
    }),
  };

  return (
    <Pressable onPress={onPress}>
      <Animated.View style={[styles.outerGlow, animatedStyle]}>
        <LinearGradient colors={Gradients.micOuter} style={styles.outerGradient}>
          <LinearGradient colors={Gradients.micInner} style={styles.innerCircle}>
            {/* <MaterialIcons name="mic" color={Colors.textPrimary} size={32} /> */}
          </LinearGradient>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

function createStyles(size: number) {
  const outerSize = size;
  const innerSize = size * 0.78;
  const borderRadius = outerSize / 2;

  return StyleSheet.create({
    outerGlow: {
      width: outerSize,
      height: outerSize,
      borderRadius,
      alignItems: 'center',
      justifyContent: 'center',
    },
    outerGradient: {
      width: outerSize,
      height: outerSize,
      borderRadius,
      alignItems: 'center',
      justifyContent: 'center',
      padding: size * 0.1,
    },
    innerCircle: {
      width: innerSize,
      height: innerSize,
      borderRadius: innerSize / 2,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: Colors.accent,
      shadowOpacity: 0.8,
      shadowRadius: 30,
      shadowOffset: { width: 0, height: 0 },
      elevation: 16,
    },
  });
}

