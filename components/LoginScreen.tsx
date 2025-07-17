import { useState } from "react";
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

interface LoginScreenProps {
  onNavigateToSignup: () => void;
  onLoginSuccess: () => void;
}

export default function LoginScreen({ onNavigateToSignup, onLoginSuccess }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    // Dummy: call onLoginSuccess
    onLoginSuccess();
    // Alert.alert("Success", "Login functionality would go here");
  };

  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../assets/images/mainbg.jpg")}
        style={{ width: "100%", height: "100%", flex: 1 }}
        resizeMode="cover"
      >
        <SafeAreaView className="flex-1">
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: 40,
            }}
            showsVerticalScrollIndicator={false}
          >
            {/* Hero Section - Matching Main Screen */}
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
                  SNITCH<Text className="text-dotsnitch">.</Text>
                </Text>
              </View>
            </View>

            {/* Welcome Section */}
            <View className="w-full px-6 mb-8">
              <View
                className="border-4 border-black rounded-none bg-white shadow-lg p-6"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 4, height: 4 },
                  shadowOpacity: 1,
                  shadowRadius: 0,
                  elevation: 8,
                }}
              >
                <Text
                  className="text-black text-3xl font-bold text-center"
                  style={{ fontFamily: "SpaceGrotesk-Bold" }}
                >
                  Welcome Back!
                </Text>
                <Text
                  className="text-black text-lg text-center mt-2"
                  style={{ fontFamily: "SpaceGrotesk-Medium" }}
                >
                  Ready to unleash your creativity?
                </Text>
              </View>
            </View>

            {/* Login Form Section */}
            <View className="w-full px-6 mb-8">
              <View
                className="border-4 border-black rounded-none bg-card-bg-1 p-6"
                style={{
                  shadowColor: "#296779",
                  shadowOffset: { width: 4, height: 4 },
                  shadowOpacity: 1,
                  shadowRadius: 0,
                  elevation: 8,
                }}
              >
                {/* Email Input */}
                <View className="mb-6">
                  <View
                    className="border-4 border-black p-4 bg-white"
                    style={{
                      shadowColor: "#000",
                      shadowOffset: { width: 4, height: 4 },
                      shadowOpacity: 1,
                      shadowRadius: 0,
                      elevation: 8,
                    }}
                  >
                    <TextInput
                      className="text-lg font-bold text-black"
                      placeholder="Enter your email"
                      placeholderTextColor="#666"
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      style={{ 
                        fontWeight: "700",
                        fontFamily: "SpaceGrotesk-Medium"
                      }}
                    />
                  </View>
                </View>

                {/* Password Input */}
                <View className="mb-6">
                  <View
                    className="border-4 border-black p-4 bg-white"
                    style={{
                      shadowColor: "#000",
                      shadowOffset: { width: 4, height: 4 },
                      shadowOpacity: 1,
                      shadowRadius: 0,
                      elevation: 8,
                    }}
                  >
                    <TextInput
                      className="text-lg font-bold text-black"
                      placeholder="Enter your password"
                      placeholderTextColor="#666"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                      style={{ 
                        fontWeight: "700",
                        fontFamily: "SpaceGrotesk-Medium"
                      }}
                    />
                  </View>
                </View>

                {/* Forgot Password Link */}
                <TouchableOpacity className="mb-6">
                  <Text 
                    className="text-focus-text font-bold text-right underline"
                    style={{ fontFamily: "SpaceGrotesk-Medium" }}
                  >
                    Forgot your password?
                  </Text>
                </TouchableOpacity>

                {/* Login Button - Matching START button prominence */}
                <TouchableOpacity
                  onPress={handleLogin}
                  activeOpacity={0.8}
                  className="mb-6"
                >
                  <View
                    className="bg-focus-start w-full h-16 flex items-center justify-center"
                    style={{
                      shadowColor: "#000",
                      shadowOffset: { width: 4, height: 4 },
                      shadowOpacity: 1,
                      shadowRadius: 0,
                      elevation: 8,
                    }}
                  >
                    <Text
                      className="text-focus-text text-[36px] font-bold"
                      style={{ fontFamily: "SpaceGrotesk-Bold" }}
                    >
                      LOGIN
                    </Text>
                  </View>
                </TouchableOpacity>

                {/* Google Login Button */}
                <TouchableOpacity activeOpacity={0.8}>
                  <View
                    className="border-4 border-black p-4 bg-white"
                    style={{
                      shadowColor: "#000",
                      shadowOffset: { width: 4, height: 4 },
                      shadowOpacity: 1,
                      shadowRadius: 0,
                      elevation: 8,
                    }}
                  >
                    <Text
                      className="text-center text-xl font-black text-black"
                      style={{ 
                        fontWeight: "900",
                        fontFamily: "SpaceGrotesk-Bold"
                      }}
                    >
                      Sign in with Google
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* Signup Link Section */}
            <View className="w-full px-6">
              <View
                className="border-4 border-black rounded-none bg-white shadow-lg p-6"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 4, height: 4 },
                  shadowOpacity: 1,
                  shadowRadius: 0,
                  elevation: 8,
                }}
              >
                <Text 
                  className="text-black font-bold text-lg text-center"
                  style={{ fontFamily: "SpaceGrotesk-Medium" }}
                >
                  Don&apos;t have an account?{" "}
                  <Text
                    className="underline font-black"
                    style={{ 
                      fontWeight: "900",
                      fontFamily: "SpaceGrotesk-Bold"
                    }}
                    onPress={onNavigateToSignup}
                  >
                    Sign up
                  </Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
