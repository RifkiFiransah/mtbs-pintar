import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomHeader } from "../components/CustomHeader";

interface ProfilScreenProps {
  navigation: any;
}

export const ProfilScreen = ({ navigation }: ProfilScreenProps) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
    },
    scrollContent: {
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    profileCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: 12,
      padding: 20,
      marginBottom: 16,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    profileIcon: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: "#E3F2FD",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 12,
    },
    profileName: {
      fontSize: 18,
      fontWeight: "700",
      color: "#1E3A8A",
      marginBottom: 4,
    },
    profileSubtext: {
      fontSize: 12,
      color: "#999999",
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: "600",
      color: "#1E3A8A",
      marginTop: 16,
      marginBottom: 10,
    },
    infoCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: 12,
      padding: 14,
      marginBottom: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    infoLabel: {
      fontSize: 13,
      color: "#666666",
    },
    infoValue: {
      fontSize: 13,
      fontWeight: "600",
      color: "#1E3A8A",
    },
    versionText: {
      fontSize: 12,
      color: "#999999",
      textAlign: "center",
      marginTop: 20,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Profil" />
      <ScrollView style={styles.container}>
        <View style={styles.scrollContent}>
          <View style={styles.profileCard}>
            <View style={styles.profileIcon} />
            <Text style={styles.profileName}>Pengguna MTBS</Text>
            <Text style={styles.profileSubtext}>Versi Premium</Text>
          </View>

          <Text style={styles.sectionTitle}>Informasi Aplikasi</Text>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Nama Aplikasi</Text>
            <Text style={styles.infoValue}>MTBS-Pintar</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Versi</Text>
            <Text style={styles.infoValue}>1.0.0</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Tipe</Text>
            <Text style={styles.infoValue}>MTBS Provider</Text>
          </View>

          <Text style={styles.sectionTitle}>Tentang Aplikasi</Text>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Pengembang</Text>
            <Text style={styles.infoValue}>UBHI & Tim</Text>
          </View>

          <Text style={styles.versionText}>
            Manajemen Terpadu Balita Sakit{"\n"}Untuk kesehatan balita yang
            lebih baik
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
