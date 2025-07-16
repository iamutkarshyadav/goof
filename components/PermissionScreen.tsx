import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PermissionScreen() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/main");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>PermissionScreen</Text>
      </View>

      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  bottomTab: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  continueButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});