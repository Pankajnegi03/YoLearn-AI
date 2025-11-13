import { MaterialIcons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Colors, Gradients, spacing } from "@/theme";

import RulerPenIcon from "../../assets/images/ruler-pen.png";

// ICON MAPS
const MATERIAL_ICONS: Record<string, keyof typeof MaterialIcons.glyphMap> = {
  YoLearn: "graphic-eq",
};

const CUSTOM_ICONS: Record<string, any> = {
  Tools: RulerPenIcon,
};

export function HomeTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={Gradients.tabBar}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const rawLabel = options.tabBarLabel ?? options.title ?? route.name;
          const label =
            typeof rawLabel === "string" ? rawLabel : (route.name as string);
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const materialIconName = MATERIAL_ICONS[route.name];
          const customIcon = CUSTOM_ICONS[route.name];

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              style={[
                styles.tabButton,
                isFocused ? styles.tabButtonActive : null,
              ]}
            >
              <View style={[styles.pill, isFocused ? styles.pillActive : null]}>
                {materialIconName && (
                  <MaterialIcons
                    name={materialIconName}
                    size={22}
                    color={Colors.textSecondary}
                  />
                )}

                {customIcon && (
                  <Image
                    source={customIcon}
                    style={{
                      width: 22,
                      height: 22,
                      tintColor: Colors.textSecondary,
                      resizeMode: "contain",
                    }}
                  />
                )}

                <Text
                  style={[styles.label, isFocused ? styles.labelActive : null]}
                >
                  {label}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 26,
    bottom: 32,
    width: 204,
    borderRadius: 36,
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    elevation: 20,
  },
  background: {
    flexDirection: "row",
    borderRadius: 36,
    padding: spacing.xs,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.06)",
    overflow: "hidden",
  },
  tabButton: {
    flex: 1,
    borderRadius: 28,
    padding: 2,
  },
  tabButtonActive: {
    backgroundColor: "#00000099",
    borderRadius: 24,
  },
  pill: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  pillActive: {
    borderRadius: 24,
  },
  label: {
    color: Colors.textSecondary,
    fontSize: 14,
    fontWeight: "600",
    marginTop: 2,
  },
  labelActive: {
    color: Colors.textSecondary,
  },
});
