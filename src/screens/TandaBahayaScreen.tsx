import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomHeader } from "../components/CustomHeader";

interface TandaBahayaScreenProps {
  navigation: any;
}

export const TandaBahayaScreen = ({ navigation }: TandaBahayaScreenProps) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
    },
    scrollContent: {
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    warningCard: {
      backgroundColor: "#FFF3E0",
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: "#F57C00",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    warningTitle: {
      fontSize: 15,
      fontWeight: "700",
      color: "#E65100",
      marginBottom: 8,
    },
    warningDescription: {
      fontSize: 13,
      color: "#666666",
      lineHeight: 18,
    },
    emergencyCard: {
      backgroundColor: "#FFEBEE",
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: "#C62828",
    },
    emergencyTitle: {
      fontSize: 15,
      fontWeight: "700",
      color: "#C62828",
      marginBottom: 8,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: "#1E3A8A",
      marginTop: 16,
      marginBottom: 12,
      paddingLeft: 8,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title="Tanda Bahaya Umum"
        showBack
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.container}>
        <View style={styles.scrollContent}>
          <Text style={styles.sectionTitle}>Tanda Bahaya Umum</Text>

          <View style={styles.warningCard}>
            <Text style={styles.warningTitle}>Demam Tinggi</Text>
            <Text style={styles.warningDescription}>
              Suhu tubuh sebesar 38.5 derajat Celsius atau demam yang
              berlangsung lebih dari 3 hari tanpa perbaikan.
            </Text>
          </View>

          <View style={styles.warningCard}>
            <Text style={styles.warningTitle}>Kesulitan Bernapas</Text>
            <Text style={styles.warningDescription}>
              Napas cepat, terengah-engah, atau berbunyi mengi yang baru
              terjadi.
            </Text>
          </View>

          <View style={styles.warningCard}>
            <Text style={styles.warningTitle}>Dehidrasi</Text>
            <Text style={styles.warningDescription}>
              Tidak buang air kecil lebih dari 6 jam, bibir kering, atau mata
              cekung.
            </Text>
          </View>

          <Text style={styles.sectionTitle}>
            Tanda Bahaya Serius - Segera ke Rumah Sakit!
          </Text>

          <View style={styles.emergencyCard}>
            <Text style={styles.emergencyTitle}>
              Kejang atau Tidak Sadarkan Diri
            </Text>
            <Text style={styles.warningDescription}>
              Segera bawa ke rumah sakit atau hubungi ambulans.
            </Text>
          </View>

          <View style={styles.emergencyCard}>
            <Text style={styles.emergencyTitle}>Perdarahan/Pendarahan</Text>
            <Text style={styles.warningDescription}>
              Pendarahan dari mulut, hidung, atau tinja yang berdarah.
            </Text>
          </View>

          <View style={styles.emergencyCard}>
            <Text style={styles.emergencyTitle}>Perut Membengkak</Text>
            <Text style={styles.warningDescription}>
              Perut membengkak keras disertai nyeri hebat atau muntah-muntah.
            </Text>
          </View>

          <View style={styles.emergencyCard}>
            <Text style={styles.emergencyTitle}>Syok/Tanda Syok</Text>
            <Text style={styles.warningDescription}>
              Ekstremitas dingin, denyut nadi cepat lemah, atau kesadaran
              menurun.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
