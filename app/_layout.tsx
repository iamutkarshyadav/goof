import { Stack } from "expo-router";
import './globals.css';
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "SpaceGrotesk-Medium": require("../assets/fonts/SpaceGrotesk-Medium.ttf"),
    "SpaceGrotesk-Regular": require("../assets/fonts/SpaceGrotesk-Regular.ttf"),
    "SpaceGrotesk-Bold": require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
    "SpaceGrotesk-SemiBold": require("../assets/fonts/SpaceGrotesk-SemiBold.ttf"),
    "SpaceGrotesk-Light": require("../assets/fonts/SpaceGrotesk-Light.ttf"),
    "fonts-for-focus":  require("../assets/fonts/Satoshi-Bold.otf")

  });

  if (!fontsLoaded) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="welcome" options={{ headerShown: false, gestureEnabled: false }} />
      <Stack.Screen name="permission" options={{ headerShown: false, gestureEnabled: false }} />
      <Stack.Screen name="main" options={{ headerShown: false }} />
    </Stack>
  );
}
