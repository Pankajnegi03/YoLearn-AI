import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import { Colors, Gradients } from "@/theme";

const appBackgroundSource = require("../../assets/images/app-background.png");

type AppBackgroundProps = {
  children: ReactNode;
  variant?: "default" | "home";
};

export function AppBackground({
  children,
  variant = "default",
}: AppBackgroundProps) {
  const gradientColors = variant === "home" ? Gradients.home : Gradients.screen;

  return (
    <ImageBackground
      source={appBackgroundSource}
      resizeMode="cover"
      style={styles.container}
      imageStyle={styles.image}
    >
      <View
        style={[styles.content, variant === "home" ? styles.homeContent : null]}
      >
        {children}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 32,
  },
  homeContent: {
    paddingHorizontal: 20,
    paddingTop: 44,
  },
});
