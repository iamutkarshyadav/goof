import { useState } from "react";
import LoginScreen from "../components/LoginScreen";
import SignupScreen from "../components/SignupScreen";

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState<"login" | "signup">(
    "login",
  );

  const navigateToSignup = () => {
    setCurrentScreen("signup");
  };

  const navigateToLogin = () => {
    setCurrentScreen("login");
  };

  if (currentScreen === "login") {
    return <LoginScreen onNavigateToSignup={navigateToSignup} />;
  }

  return <SignupScreen onNavigateToLogin={navigateToLogin} />;
}
