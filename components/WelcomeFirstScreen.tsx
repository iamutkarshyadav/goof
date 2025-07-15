import { ResizeMode, Video } from "expo-av";
import { useRef } from "react";
import { Animated, Dimensions, PanResponder, Text, View } from "react-native";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

// Height of WELCOME box (py-4 + font size + border + margin): estimate ~68px (49+68=117)
const BOX_MARGIN = 5;
const WELCOME_TOP = 69; // was 59, now 59+10
const WELCOME_HEIGHT = 68;
const TO_TOP = WELCOME_TOP + WELCOME_HEIGHT + BOX_MARGIN + 6; // 6px extra down
const LEFT_OFFSET = 14;
const TO_BOX_WIDTH = 120; // px, estimate width of 'TO' box (px-6 + font + border)
const SNITCH_LEFT = LEFT_OFFSET + TO_BOX_WIDTH + BOX_MARGIN * 2; // 2 margins between boxes

export default function WelcomeFirstScreen() {
  // Slider logic
  const SLIDER_WIDTH = 320;
  const SLIDER_HEIGHT = 56;
  const HANDLE_SIZE = 48;
  const SLIDE_RANGE = SLIDER_WIDTH - HANDLE_SIZE - 8; // 8px padding
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
    <View className="flex-1 justify-center items-center bg-login-bg">
      <Video
        source={require("../assets/images/welcomescreen1.mp4")}
        style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, width, height, zIndex: 0 }}
        resizeMode={ResizeMode.COVER}
        isLooping
        isMuted
        shouldPlay
      />
      {/* WELCOME Box - top left, 69px from top, 14px from left, 5px margin */}
      <View style={{ position: 'absolute', top: WELCOME_TOP, left: LEFT_OFFSET, zIndex: 10, margin: BOX_MARGIN }}>
        <View
          className="border-4 border-black bg-white px-6 py-4"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 0,
            elevation: 8,
            alignSelf: "center",
          }}
        >
          <Text
            className="text-4xl md:text-5xl font-black uppercase tracking-widest text-black text-center"
            style={{ fontFamily: "Rubik Mono One", fontWeight: "900" }}
          >
            WELCOME
          </Text>
        </View>
      </View>
      {/* TO Box - aligned left, just below WELCOME box, 5px margin */}
      <View style={{ position: 'absolute', top: TO_TOP, left: LEFT_OFFSET, zIndex: 10, margin: BOX_MARGIN }}>
        <View
          className="border-4 border-black bg-to-box-welcome px-6 py-4"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 0,
            elevation: 8,
            alignSelf: "center",
            minWidth: TO_BOX_WIDTH,
          }}
        >
          <Text
            className="text-4xl md:text-5xl font-black uppercase tracking-widest text-black text-center "
            style={{ fontFamily: "Rubik Mono One", fontWeight: "900" }}
          >
            TO
          </Text>
        </View>
      </View>
      {/* SNITCH Box - right of TO box, 2*margin gap, 5px margin */}
      <View style={{ position: 'absolute', top: TO_TOP, left: SNITCH_LEFT, zIndex: 10, margin: BOX_MARGIN }}>
        <View
          className="border-4 border-black bg-white px-6 py-4"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 0,
            elevation: 8,
            alignSelf: "center",
          }}
        >
          <Text
            className="text-4xl md:text-5xl font-black uppercase tracking-widest text-black text-center"
            style={{ fontFamily: "Rubik Mono One", fontWeight: "900" }}
          >
            SNITCH
          </Text>
        </View>
      </View>
      <View className="flex-1 justify-center items-center z-10 w-full px-6">
        {/* Subheading Box - neobrutalist, bold, saturated yellow, thick border/shadow */}
        <View
          className="border-4 border-black bg-yellow-400 px-8 py-6 mt-48"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 6, height: 6 },
            shadowOpacity: 1,
            shadowRadius: 0,
            elevation: 12,
            alignSelf: "stretch",
          }}
        >
          <Text
            className="text-2xl md:text-3xl font-extrabold italic text-black text-center tracking-tight"
            style={{ fontFamily: "Inter", fontWeight: "900" }}
          >
            Your phone habits are no longer safe.
          </Text>
        </View>
        {/* Body Text Box - neobrutalist, blocky, bold, extra padding, extra marginTop */}
        <View
          className="border-4 border-black bg-paragraph-box-welcome px-8 py-8 mb-4"
          style={{
            marginTop: 24,
            shadowColor: "#000",
            shadowOffset: { width: 6, height: 6 },
            shadowOpacity: 1,
            shadowRadius: 0,
            elevation: 12,
            alignSelf: "stretch",
          }}
        >
          <Text
            className="text-xl md:text-2xl font-extrabold text-black text-center tracking-tight"
            style={{ fontFamily: "Space Grotesk", fontWeight: "900" }}
          >
            We monitor your screen time, focus sessions, and every impulsive unlock.{"\n"}
            It’s not about control. It’s about calling your digital BS.
          </Text>
        </View>
        {/* Slide to unlock slider - sharp corners with animated fill */}
        <View className="items-center w-full mt-8 mb-8">
          <View
            className="border-4 border-black bg-white"
            style={{
              width: SLIDER_WIDTH,
              height: SLIDER_HEIGHT,
              borderRadius: 0,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 4,
              shadowColor: '#000',
              shadowOffset: { width: 4, height: 4 },
              shadowOpacity: 1,
              shadowRadius: 0,
              elevation: 8,
              overflow: 'hidden',
            }}
          >
            {/* Animated fill bar */}
            <Animated.View
              style={{
                position: 'absolute',
                left: 4,
                top: 4,
                bottom: 4,
                width: Animated.add(pan, new Animated.Value(HANDLE_SIZE)),
                backgroundColor: '#facc15', // or use 'var(--slider-fill-welcome)' if you have a variable
                zIndex: 0,
              }}
            />
            <Animated.View
              {...panResponder.panHandlers}
              style={{
                width: HANDLE_SIZE,
                height: HANDLE_SIZE,
                borderRadius: 0,
                backgroundColor: '#222',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 4,
                borderColor: '#000',
                shadowColor: '#000',
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
            <View style={{ position: 'absolute', left: 0, right: 0, height: SLIDER_HEIGHT, justifyContent: 'center', alignItems: 'center', zIndex: 1 }} pointerEvents="none">
              <Text className="text-black text-lg font-black uppercase tracking-widest">Slide to unlock</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}