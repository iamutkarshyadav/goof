import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function MainScreen() {
  const router = useRouter();
  const [pressed, setPressed] = useState(false);
  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../assets/images/mainbg.jpg")}
        style={{ width: "100%", height: "100%", flex: 1 }}
        resizeMode="cover"
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            paddingBottom: 40,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Hero Section */}
          <View className="w-full px-6 pt-16 pb-8">
            <View
              className="border-4 border-black rounded-none py-8 shadow-lg bg-to-box-welcome"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 8,
              }}
            >
              <Text
                className="text-black text-[56px] font-black uppercase text-center"
                style={{ fontFamily: "Inter" }}
              >
                HOME!
              </Text>
            </View>
          </View>

          {/* Action Cards Section */}
          <View className="w-full px-6 mb-8">
            <View className="flex-row justify-center items-stretch gap-4">
              {/* Unleash Card */}
              <View
                className="flex-1 border-4 border-black rounded-none px-4 py-6 bg-white shadow-lg items-center"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 4, height: 4 },
                  shadowOpacity: 1,
                  shadowRadius: 0,
                  elevation: 8,
                }}
              >
                <Text
                  className="text-black text-2xl font-bold text-center"
                  style={{ fontFamily: "SpaceGrotesk-Bold" }}
                >
                  Unleash
                </Text>
              </View>

              {/* Creativity Card */}
              <View
                className="flex-1 border-4 border-black rounded-none px-4 py-6 bg-white shadow-lg items-center"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 4, height: 4 },
                  shadowOpacity: 1,
                  shadowRadius: 0,
                  elevation: 8,
                }}
              >
                <Text
                  className="text-black text-2xl font-bold text-center"
                  style={{ fontFamily: "SpaceGrotesk-Bold" }}
                >
                  Creativity
                </Text>
              </View>
            </View>
          </View>

          {/* Main Feature Section - IGNiTE */}
          <View className="w-full px-6 mb-8">
            <View
              className="border-4 border-black rounded-none bg-white p-6"
              style={{
                shadowColor: "#296779",
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 8,
              }}
            >
              {/* IGNiTE Header */}
              <View className="items-center mb-6">
                <Text
                  className="text-black font-bold text-[72px] text-center"
                  style={{
                    fontFamily: "fonts-for-focus",
                    fontWeight: "900",
                  }}
                >
                  IGNiTE
                </Text>
              </View>

              {/* Focus Session Card */}
              <View className="bg-ignite-under-box border-4 border-black rounded-none p-4 mb-4">
                <View
                  className="bg-red-700 w-full h-20 flex items-center justify-center mb-4"
                  style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 4, height: 4 },
                    shadowOpacity: 1,
                    shadowRadius: 0,
                    elevation: 8,
                  }}
                >
                  <Text
                    className="text-focusSession text-[32px] font-bold"
                    style={{ fontFamily: "SpaceGrotesk-Bold" }}
                  >
                    Focus Session ?
                  </Text>
                </View>

                {/* START Button - More Prominent */}
                <TouchableOpacity
                  activeOpacity={1}
                  onPressIn={() => setPressed(true)}
                  onPressOut={() => setPressed(false)}
                  onPress={() => router.push("/session-setup")}
                  style={{
                    width: 192, // w-48
                    height: 64, // h-16
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    backgroundColor: "#facc15", // bg-focus-start
                    borderWidth: pressed ? 1 : 4,
                    borderColor: "#000",
                    // Shadow styles
                    shadowColor: "#000",
                    shadowOffset: pressed ? { width: 0, height: 0 } : { width: 4, height: 4 },
                    shadowOpacity: pressed ? 0 : 1,
                    shadowRadius: 0,
                    elevation: pressed ? 0 : 8,
                  }}
                >
                  <Text
                    className="text-focus-text text-[36px] font-bold"
                    style={{ fontFamily: "SpaceGrotesk-Bold" }}
                  >
                    LET&apos;S GO!
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Secondary Feature Section */}
          <View className="w-full px-6">
            <View
              className="border-4 border-black rounded-none bg-card-bg-1 p-8"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 8,
              }}
            >
              <View className="flex items-center justify-center h-48">
                <Text className="text-white text-xl font-bold">
                  Track Your Progress
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
