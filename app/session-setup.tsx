import { ResizeMode, Video } from "expo-av";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const PRESET_TIMES = [15, 30, 60];

export default function SessionSetup() {
  const [selectedTime, setSelectedTime] = useState(PRESET_TIMES[0]);
  const [customTime, setCustomTime] = useState("");
  const router = useRouter();
  const [pressed, setPressed] = useState(false);

  const handleTabPress = (time: number) => {
    setSelectedTime(time);
    setCustomTime("");
  };

  const handleInputChange = (text: string) => {
    setCustomTime(text.replace(/[^0-9]/g, ""));
    setSelectedTime(0);
  };

  const getSessionLength = () => {
    if (customTime) return parseInt(customTime, 10);
    return selectedTime;
  };

  return (
    <View style={styles.container}>
      <Video
        source={require("../assets/images/sessionbg.mp4")}
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.COVER}
        isLooping
        isMuted
        shouldPlay
      />
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 24}
        >
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "flex-start",
              paddingBottom: 40,
            }}
            showsVerticalScrollIndicator={false}
          >
            {/* Hero Section */}
            <View className="w-full px-6 pt-16 pb-8">
              <View
                style={styles.heroBox}
                className="border-4 border-black bg-white rounded-none py-6 shadow-lg"
              >
                <Text
                  className="text-black text-[40px] font-black uppercase text-center"
                  style={{ fontFamily: "Inter" }}
                >
                  Ready to Focus?
                </Text>
              </View>
            </View>

            {/* Subheading */}
            <View className="w-full px-6 mb-6">
              <View
                style={styles.subheadingBox}
                className="border-4 border-black rounded-none bg-yellow-400 px-8 py-6 shadow-lg"
              >
                <Text
                  className="text-black text-2xl font-extrabold italic text-center tracking-tight"
                  style={{ fontFamily: "SpaceGrotesk-Bold" }}
                >
                  Set your session length and goal. We&apos;ll keep you honest.
                </Text>
              </View>
            </View>

            {/* Time Selection Tabs */}
            <View className="w-[390px] px-6 mb-6">
              <View
                style={styles.tabsBox}
                className="border-4 border-black bg-white rounded-none px-8 py-4 shadow-lg"
              >
                <View className="flex-row justify-center items-center gap-4">
                  {PRESET_TIMES.map((time) => (
                    <TouchableOpacity
                      key={time}
                      style={[
                        styles.tab,
                        selectedTime === time && styles.tabSelected,
                      ]}
                      className="border-2 border-black bg-white rounded-none px-6 py-3 shadow"
                      onPress={() => handleTabPress(time)}
                      activeOpacity={0.85}
                    >
                      <Text
                        className="text-black text-lg font-bold"
                        style={{ fontFamily: "SpaceGrotesk-Bold" }}
                      >
                        {time} min
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>

            {/* Manual Time Input */}
            <View className="">
              <View className="w-full px-6 mb-8 items-center">
                <View
                  style={styles.inputBox}
                  className="border-2 border-black bg-white rounded-none px-6 py-4 shadow"
                >
                  <Text
                    className="text-black text-lg font-bold mb-2"
                    style={{ fontFamily: "SpaceGrotesk-Bold" }}
                  >
                    Or enter custom time (minutes):
                  </Text>
                  <TextInput
                    style={[styles.input, styles.inputShadow]}
                    className="text-black text-xl font-bold text-center"
                    keyboardType="numeric"
                    value={customTime}
                    onChangeText={handleInputChange}
                    placeholder="45"
                    placeholderTextColor="#888"
                    maxLength={3}
                  />
                </View>
              </View>
            </View>

            {/* Start Session Button */}
            <View className="w-[250px] px-6 pb-10">
              <TouchableOpacity
                style={[
                  styles.button,
                  { alignSelf: "center" },
                  pressed && styles.buttonPressed,
                ]}
                className="border-4 border-black bg-white rounded-none shadow-lg items-center justify-center"
                activeOpacity={0.85}
                onPressIn={() => setPressed(true)}
                onPressOut={() => setPressed(false)}
                onPress={() => router.push("/main")}
                disabled={!getSessionLength()}
              >
                <Text
                  className="text-black text-2xl font-black text-center"
                  style={{ fontFamily: "SpaceGrotesk-Bold" }}
                >
                  START SESSION
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  heroBox: {
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
  },
  subheadingBox: {
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 12,
  },
  tab: {
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
    minWidth: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  tabSelected: {
    backgroundColor: "#facc15",
    borderColor: "#facc15",
  },
  inputBox: {
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
    width: "100%",
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 0,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 24,
    fontWeight: "bold",
    width: 100,
    textAlign: "center",
    marginTop: 4,
  },
  button: {
    height: 64,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
  },
  tabsBox: {
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
    borderRadius: 0,
    backgroundColor: "#fff",
    borderWidth: 4,
    borderColor: "#000",
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginBottom: 0,
  },
  inputShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  buttonPressed: {
    borderWidth: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    elevation: 0,
  },
});
