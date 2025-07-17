import { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  View,
} from "react-native";

interface SignupScreenProps {
  onNavigateToLogin: () => void;
  onSignupSuccess: () => void;
}

export default function SignupScreen({ onNavigateToLogin, onSignupSuccess }: SignupScreenProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    // Dummy: call onSignupSuccess
    onSignupSuccess();
    // Alert.alert("Success", "Signup functionality would go here");
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
                  Create Account
                </Text>
                <Text
                  className="text-black text-lg text-center mt-2"
                  style={{ fontFamily: "SpaceGrotesk-Medium" }}
                >
                  Join the digital accountability revolution
                </Text>
              </View>
            </View>

            {/* Signup Form Section */}
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
                {/* Name Input */}
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
                      placeholder="Enter your full name"
                      placeholderTextColor="#666"
                      value={name}
                      onChangeText={setName}
                      autoCapitalize="words"
                      style={{ 
                        fontWeight: "700",
                        fontFamily: "SpaceGrotesk-Medium"
                      }}
                    />
                  </View>
                </View>

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

                {/* Signup Button - Matching LOGIN button prominence */}
                <TouchableOpacity
                  onPress={handleSignup}
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
                      SIGN UP
                    </Text>
                  </View>
                </TouchableOpacity>

                {/* Google Signup Button */}
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
                      Sign up with Google
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* Terms Text Section */}
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
                  className="text-black text-center text-sm font-bold"
                  style={{ fontFamily: "SpaceGrotesk-Medium" }}
                >
                  By creating an account, you agree to our Terms of Service and
                  Privacy Policy
                </Text>
              </View>
            </View>

            {/* Login Link Section */}
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
                  Already have an account?{" "}
                  <Text
                    className="underline font-black"
                    style={{ 
                      fontWeight: "900",
                      fontFamily: "SpaceGrotesk-Bold"
                    }}
                    onPress={onNavigateToLogin}
                  >
                    Login
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
