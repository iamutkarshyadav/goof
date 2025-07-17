import { ResizeMode, Video } from "expo-av";
import { useRouter } from "expo-router";
import { useRef } from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

// Slider constants
const SLIDER_WIDTH = 320;
const SLIDER_HEIGHT = 56;
const HANDLE_SIZE = 48;
const SLIDE_RANGE = SLIDER_WIDTH - HANDLE_SIZE - 8; // 8px padding

export default function WelcomeFirstScreen() {
  const pan = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const hasNavigatedRef = useRef(false);
  const currentPanValue = useRef(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        let newX = Math.max(0, Math.min(gestureState.dx, SLIDE_RANGE));
        pan.setValue(newX);
        currentPanValue.current = newX;
        if (newX >= SLIDE_RANGE && !hasNavigatedRef.current) {
          hasNavigatedRef.current = true;
          pan.setValue(SLIDE_RANGE); // Snap to end
          setTimeout(() => {
            router.push("/permission");
          }, 150); // Small delay for UX
        }
      },
      onPanResponderRelease: () => {
        if (currentPanValue.current < SLIDE_RANGE) {
          Animated.spring(pan, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
          hasNavigatedRef.current = false;
        }
      },
    })
  ).current;

  return (
    <View className="flex-1">
      <Video
        source={require("../assets/images/welcomescreen1.mp4")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width,
          height,
          zIndex: 0,
        }}
        resizeMode={ResizeMode.COVER}
        isLooping
        isMuted
        shouldPlay
      />

      <SafeAreaView className="flex-1">
       
          {/* Hero Section - WELCOME TO SNITCH Boxes */}
          <View className="w-full px-6 pt-16 pb-8">
            {/* WELCOME Box */}
            <View className="mb-4">
              <View
                className="border-4 border-black rounded-none py-6 bg-white shadow-lg"
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
                  WELCOME
                </Text>
              </View>
            </View>

            {/* TO and SNITCH Boxes Row */}
            <View className="flex-row justify-center items-stretch gap-4">
              {/* TO Box */}
              <View
                className="border-4 border-black rounded-none px-4 py-6 bg-to-box-welcome shadow-lg items-center"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 4, height: 4 },
                  shadowOpacity: 1,
                  shadowRadius: 0,
                  elevation: 8,
                  width: 80, // Fixed width for TO box
                  alignSelf: "center",
                }}
              >
                <Text
                  className="text-black text-[28px] font-black uppercase text-center"
                  style={{ fontFamily: "Inter" }}
                >
                  TO
                </Text>
              </View>

              {/* SNITCH Box */}
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
                  className="text-black text-[56px] font-black uppercase text-center"
                  style={{ fontFamily: "Inter" }}
                >
                  SNITCH
                </Text>
              </View>
            </View>
          </View>

          {/* Content Section */}
          <View className="flex-1 justify-center items-center w-full px-6">
            {/* Subheading Box - neobrutalist, bold, saturated yellow, thick border/shadow */}
            <View className="w-full mb-6">
              <View
                className="border-4 border-black rounded-none bg-yellow-400 px-8 py-6 shadow-lg"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 6, height: 6 },
                  shadowOpacity: 1,
                  shadowRadius: 0,
                  elevation: 12,
                }}
              >
                <Text
                  className="text-black text-2xl md:text-3xl font-extrabold italic text-center tracking-tight"
                  style={{ fontFamily: "SpaceGrotesk-Bold" }}
                >
                  Your phone habits are no longer safe.
                </Text>
              </View>
            </View>

            {/* Body Text Box - neobrutalist, blocky, bold, extra padding */}
            <View className="w-full mb-8">
              <View
                className="border-4 border-black rounded-none bg-paragraph-box-welcome px-8 py-8 shadow-lg"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 6, height: 6 },
                  shadowOpacity: 1,
                  shadowRadius: 0,
                  elevation: 12,
                }}
              >
                <Text
                  className="text-black text-xl md:text-2xl font-extrabold text-center tracking-tight"
                  style={{ fontFamily: "SpaceGrotesk-Bold" }}
                >
                  We monitor your screen time, focus sessions, and every
                  impulsive unlock.{"\n"}
                  It&apos;s not about control. It&apos;s about calling your
                  digital BS.
                </Text>
              </View>
            </View>

            {/* Slide to unlock slider - sharp corners with animated fill */}
            <View className="items-center w-full">
              <View
                className="border-4 border-black bg-white"
                style={{
                  width: SLIDER_WIDTH,
                  height: SLIDER_HEIGHT,
                  borderRadius: 0,
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 4,
                  shadowColor: "#000",
                  shadowOffset: { width: 4, height: 4 },
                  shadowOpacity: 1,
                  shadowRadius: 0,
                  elevation: 8,
                  overflow: "hidden",
                }}
              >
                {/* Animated fill bar */}
                <Animated.View
                  style={{
                    position: "absolute",
                    left: 4,
                    top: 4,
                    bottom: 4,
                    width: Animated.add(pan, new Animated.Value(HANDLE_SIZE)),
                    backgroundColor: "#facc15",
                    zIndex: 0,
                  }}
                />
                <Animated.View
                  {...panResponder.panHandlers}
                  style={{
                    width: HANDLE_SIZE,
                    height: HANDLE_SIZE,
                    borderRadius: 0,
                    backgroundColor: "#222",
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 4,
                    borderColor: "#000",
                    shadowColor: "#000",
                    shadowOffset: { width: 2, height: 2 },
                    shadowOpacity: 1,
                    shadowRadius: 0,
                    elevation: 6,
                    transform: [{ translateX: pan }],
                    zIndex: 2,
                  }}
                >
                  <Text className="text-white text-xl font-black">›</Text>
                </Animated.View>
                <View
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: SLIDER_HEIGHT,
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1,
                  }}
                  pointerEvents="none"
                >
                  <Text
                    className="text-black text-lg font-black uppercase tracking-widest"
                    style={{ fontFamily: "SpaceGrotesk-Bold" }}
                  >
                    Slide to unlock
                  </Text>
                </View>
              </View>
            </View>
          </View>
        
      </SafeAreaView>
    </View>
  );
}
