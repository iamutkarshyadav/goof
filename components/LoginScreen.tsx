import { useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image, // Add Image import
} from "react-native";

interface LoginScreenProps {
  onNavigateToSignup: () => void;
}

export default function LoginScreen({ onNavigateToSignup }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    Alert.alert("Success", "Login functionality would go here");
  };

  return (
    <SafeAreaView className="flex-1 bg-login-bg">
      <View className="flex-1 px-6 py-8">
        {/* Header */}
        <View className="mb-4 mt-8">
          <Text
            className=" flex items-center justify-center text-6xl font-black text-BLACK mb-2"
            style={{ fontWeight: "900" }}
          >
            SNITCH<Text className="text-dotsnitch">.</Text>
          </Text>
        </View>

        {/* Welcome Back Text */}
        <View className="mb-8">
          <Text className=" text-white text-2xl font-bold">
            Welcome Back!
          </Text>
        </View>

        {/* Form Container */}
        <View className="flex-1 justify-center">
          {/* Plant Image at Top Right */}
          <Image
            source={require("../assets/images/bgimage1.png")}
            style={{
              position: "absolute",
              top: -80,
              right: 0,
              width: 120,
              height: 120,
              resizeMode: "contain",
              zIndex: 10,
            }}
          />
          {/* Email Input */}
          <View className="mb-6">
            <View
              className="border-4 border-black p-4"
              style={{
                backgroundColor: "white",
                borderWidth: 4,
                borderColor: "#000",
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
                style={{ fontWeight: "700" }}
              />
            </View>
          </View>

          {/* Forgot Password Link */}
          <TouchableOpacity className="mb-6">
            <Text className="text-white font-bold text-right underline">
              Forgot your password?
            </Text>
          </TouchableOpacity>

          {/* Password Input */}
          <View className="mb-8">
            <View
              className="border-4 border-black p-4"
              style={{
                backgroundColor: "white",
                borderWidth: 4,
                borderColor: "#000",
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
                style={{ fontWeight: "700" }}
              />
            </View>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            onPress={handleLogin}
            activeOpacity={0.8}
            className="mb-6"
          >
            <View
              className="border-4 border-black p-4"
              style={{
                backgroundColor: "#FFF275",
                borderWidth: 4,
                borderColor: "#000",
                shadowColor: "#000",
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 8,
              }}
            >
              <Text
                className="text-center text-xl font-black text-black"
                style={{ fontWeight: "900" }}
              >
                Login
              </Text>
            </View>
          </TouchableOpacity>

          {/* Google Login Button */}
          <TouchableOpacity activeOpacity={0.8} className="mb-8">
            <View
              className="border-4 border-black p-4"
              style={{
                backgroundColor: "white",
                borderWidth: 4,
                borderColor: "#000",
                shadowColor: "#000",
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 8,
              }}
            >
              <Text
                className="text-center text-xl font-black text-black"
                style={{ fontWeight: "900" }}
              >
                Sign in with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Signup Link */}
        <View className="items-center">
          <Text className="text-white font-bold text-lg">
            Don&apos;t have an account?{" "}
            <Text
              className="underline font-black"
              style={{ fontWeight: "900" }}
              onPress={onNavigateToSignup}
            >
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
