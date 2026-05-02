import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomHeader } from "../components/CustomHeader";

interface CatatanScreenProps {
  navigation: any;
}

export const CatatanScreen = ({ navigation }: CatatanScreenProps) => {
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
    noteCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: "#1E88E5",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    noteDate: {
      fontSize: 12,
      fontWeight: "600",
      color: "#999999",
      marginBottom: 6,
    },
    noteSummary: {
      fontSize: 14,
      fontWeight: "600",
      color: "#1E3A8A",
      marginBottom: 6,
    },
    noteDetail: {
      fontSize: 13,
      color: "#666666",
      lineHeight: 18,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Catatan" />
      <ScrollView style={styles.container}>
        <View style={styles.scrollContent}>
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>
              Belum ada catatan{"\n\n"}Mulai dengan melakukan pengecekan kondisi
              balita
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
