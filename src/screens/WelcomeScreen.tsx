import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../components/CustomButton";

interface WelcomeScreenProps {
  navigation: any;
}

export const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1E88E5",
      paddingHorizontal: 20,
    },
    content: {
      flex: 1,
      justifyContent: "space-between",
      paddingVertical: 40,
    },
    header: {
      alignItems: "center",
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      color: "#FFFFFF",
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: "rgba(255, 255, 255, 0.9)",
      textAlign: "center",
      marginBottom: 8,
    },
    tagline: {
      fontSize: 13,
      color: "rgba(255, 255, 255, 0.8)",
      textAlign: "center",
      fontStyle: "italic",
    },
    footer: {
      gap: 12,
    },
  });

  const handleGetStarted = () => {
    navigation.replace("MainTabs");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>UBHI</Text>
          <Text style={styles.title}>MTBS-Pintar</Text>
          <Text style={styles.subtitle}>Manajemen Terpadu</Text>
          <Text style={styles.subtitle}>Balita Sakit</Text>
          <Text style={styles.tagline}>
            Kenali cepat, tangani tepat, untuk balita sehat
          </Text>
        </View>

        <View style={styles.footer}>
          <CustomButton
            title="Mulai"
            onPress={handleGetStarted}
            variant="primary"
            size="large"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
