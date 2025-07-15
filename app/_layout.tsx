import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="welcome" options={{ headerShown: false, gestureEnabled: false }} />
      <Stack.Screen name="permission" options={{ headerShown: false, gestureEnabled: false }} />
    </Stack>
  );
}
