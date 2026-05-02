import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomHeader } from "../components/CustomHeader";

interface PengingatScreenProps {
  navigation: any;
}

export const PengingatScreen = ({ navigation }: PengingatScreenProps) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
    },
    scrollContent: {
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    emptyState: {
      alignItems: "center",
      justifyContent: "center",
      height: 400,
    },
    emptyText: {
      fontSize: 16,
      color: "#999999",
      textAlign: "center",
    },
    reminderCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: "#FF9800",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    reminderTitle: {
      fontSize: 14,
      fontWeight: "600",
      color: "#1E3A8A",
      marginBottom: 6,
    },
    reminderTime: {
      fontSize: 12,
      color: "#999999",
      marginBottom: 6,
    },
    reminderDescription: {
      fontSize: 13,
      color: "#666666",
      lineHeight: 18,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Pengingat" />
      <ScrollView style={styles.container}>
        <View style={styles.scrollContent}>
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>
              Tidak ada pengingat{"\n\n"}Atur pengingat untuk jadwal kontrol
              balita Anda
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
