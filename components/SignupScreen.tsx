import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";

interface SignupScreenProps {
  onNavigateToLogin: () => void;
}

export default function SignupScreen({ onNavigateToLogin }: SignupScreenProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    Alert.alert("Success", "Signup functionality would go here");
  };

  return (
    <SafeAreaView className="flex-1 bg-login-bg">
      <View className="flex-1 px-6 py-8">
        {/* SNITCH Header */}
        <View className="mb-4 mt-8">
          <Text
            className=" flex items-center justify-center text-6xl font-black text-BLACK mb-2"
            style={{ fontWeight: "900" }}
          >
            SNITCH<Text className="text-dotsnitch">.</Text>
          </Text>
        </View>

        {/* Create Account Subheading */}
        <View className="mb-8">
          <Text className=" text-white text-2xl font-bold">
            Create your new account
          </Text>
        </View>

        {/* Form Container */}
        <View className="flex-1 justify-center">
          {/* Name Input */}
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
                placeholder="Enter your full name"
                placeholderTextColor="#666"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                style={{ fontWeight: "700" }}
              />
            </View>
          </View>

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
                placeholder="Create a password"
                placeholderTextColor="#666"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ fontWeight: "700" }}
              />
            </View>
          </View>

          {/* Signup Button */}
          <TouchableOpacity
            onPress={handleSignup}
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
                Create Account
              </Text>
            </View>
          </TouchableOpacity>

          {/* Google Signup Button */}
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
                Sign up with Google
              </Text>
            </View>
          </TouchableOpacity>

          {/* Terms Text */}
          <Text className="text-white/80 text-center text-sm font-bold mb-8 px-4">
            By creating an account, you agree to our Terms of Service and
            Privacy Policy
          </Text>
        </View>

        {/* Login Link */}
        <View className="items-center">
          <Text className="text-white font-bold text-lg">
            Already have an account?{" "}
            <Text
              className="underline font-black"
              style={{ fontWeight: "900" }}
              onPress={onNavigateToLogin}
            >
              Login
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
