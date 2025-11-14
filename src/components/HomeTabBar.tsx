import { MaterialIcons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Colors, spacing } from "@/theme";

import ProfileImage from "../../assets/images/profile.png";
import RulerPenIcon from "../../assets/images/ruler-pen.png";

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
    <View pointerEvents="box-none" style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.background}>
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
                <View
                  style={[styles.pill, isFocused ? styles.pillActive : null]}
                >
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
                      style={[
                        styles.customIcon,
                        { tintColor: Colors.textSecondary },
                      ]}
                    />
                  )}

                  <Text
                    style={[
                      styles.label,
                      isFocused ? styles.labelActive : null,
                    ]}
                  >
                    {label}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("YoLearn", {
            screen: "Companion",
          });
        }}
      >
        <Image source={ProfileImage} style={styles.profile} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  container: {
    width: 204,
    alignSelf: "flex-start",
    borderRadius: 36,
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    elevation: 20,
    backgroundColor: "#0a2120",
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
    backgroundColor: "#0b1111",
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
  profile: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 60,
    height: 60,
  },
  customIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
});
