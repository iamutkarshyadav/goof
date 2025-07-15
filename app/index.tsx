import { useState } from "react";
import { useRouter } from "expo-router";
import LoginScreen from "../components/LoginScreen";
import SignupScreen from "../components/SignupScreen";

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState<"login" | "signup">(
    "login"
  );
  const router = useRouter();

  const navigateToSignup = () => {
    setCurrentScreen("signup");
  };

  const navigateToLogin = () => {
    setCurrentScreen("login");
  };

  const handleLoginSuccess = () => {
    router.push("/welcome");
  };

  if (currentScreen === "login") {
    return <LoginScreen onNavigateToSignup={navigateToSignup} onLoginSuccess={handleLoginSuccess} />;
  }

  return <SignupScreen onNavigateToLogin={navigateToLogin} onSignupSuccess={handleLoginSuccess} />;
}
