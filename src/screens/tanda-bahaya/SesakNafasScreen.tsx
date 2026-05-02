import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomHeader } from "../../components/CustomHeader";

interface SesakNafasScreenProps {
  navigation: any;
}

export const SesakNafasScreen = ({ navigation }: SesakNafasScreenProps) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
    },
    scrollContent: {
      paddingHorizontal: 12,
      paddingVertical: 16,
      paddingBottom: 30,
    },
    mainCard: {
      backgroundColor: "#E8F4F8",
      borderRadius: 16,
      marginHorizontal: 8,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: "#4A3728",
      overflow: "hidden",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
    cardTopLine: {
      height: 4,
      backgroundColor: "#2B9FFF",
      width: "100%",
    },
    cardContent: {
      padding: 20,
    },
    cardBottomLine: {
      height: 4,
      backgroundColor: "#2B9FFF",
      width: "100%",
    },
    section: {
      backgroundColor: "#FFFFFF",
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 2,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: "#1E3A8A",
      marginBottom: 12,
      paddingBottom: 8,
      borderBottomWidth: 2,
      borderBottomColor: "#2B9FFF",
    },
    descriptionText: {
      fontSize: 13,
      color: "#333333",
      lineHeight: 20,
      marginBottom: 8,
    },
    bulletPoint: {
      flexDirection: "row",
      marginBottom: 8,
    },
    bullet: {
      width: 20,
      fontSize: 13,
      fontWeight: "600",
      color: "#2B9FFF",
      marginRight: 8,
    },
    bulletText: {
      flex: 1,
      fontSize: 13,
      color: "#333333",
      lineHeight: 20,
    },
    warningBox: {
      backgroundColor: "#E3F2FD",
      borderLeftWidth: 4,
      borderLeftColor: "#FF6B35",
      borderRadius: 8,
      padding: 12,
      marginTop: 12,
    },
    warningTitle: {
      fontSize: 13,
      fontWeight: "700",
      color: "#FF6B35",
      marginBottom: 4,
    },
    warningText: {
      fontSize: 12,
      color: "#333333",
      lineHeight: 18,
    },
    cautionBox: {
      backgroundColor: "#FFF3E0",
      borderLeftWidth: 4,
      borderLeftColor: "#FF9800",
      borderRadius: 8,
      padding: 12,
      marginTop: 12,
    },
    cautionTitle: {
      fontSize: 13,
      fontWeight: "700",
      color: "#FF9800",
      marginBottom: 4,
    },
    actionBox: {
      backgroundColor: "#E8F5E9",
      borderLeftWidth: 4,
      borderLeftColor: "#4CAF50",
      borderRadius: 8,
      padding: 12,
      marginTop: 12,
    },
    actionTitle: {
      fontSize: 13,
      fontWeight: "700",
      color: "#4CAF50",
      marginBottom: 4,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title="Sesak nafas atau nafas cepat"
        showBack
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.mainCard}>
          <View style={styles.cardTopLine} />
          <View style={styles.cardContent}>
            {/* Definisi */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Definisi</Text>
              <Text style={styles.descriptionText}>
                Anak mengalami kesulitan bernapas, nafas cepat, atau terengah-
                engah yang tidak normal saat istirahat.
              </Text>
            </View>

            {/* Cara Menilai */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Cara Menilai Nafas Cepat</Text>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Hitung frekuensi napas anak dalam 1 menit saat istirahat
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Untuk usia 2-11 bulan: normal jika ≤50 kali/menit
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Untuk usia 12-59 bulan: normal jika ≤40 kali/menit
                </Text>
              </View>

              <View style={styles.warningBox}>
                <Text style={styles.warningTitle}>⚠️ Apa Berbahaya?</Text>
                <Text style={styles.warningText}>
                  Sesak nafas atau nafas cepat dapat menunjukkan infeksi
                  pneumonia atau gangguan pernapasan lainnya yang memerlukan
                  penanganan segera.
                </Text>
              </View>
            </View>

            {/* Tanda yang Perlu Diperhatikan */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                Tanda yang Perlu Diperhatikan
              </Text>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Nafas cepat saat istirahat
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>Terengah-engah atau sesak</Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>Cuping hidung melebar</Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>Dada tertarik ke dalam</Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Berbunyi mengi atau menggrok
                </Text>
              </View>

              <View style={styles.cautionBox}>
                <Text style={styles.cautionTitle}>
                  🔍 Tanda Anak Memerlukan Bantuan
                </Text>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>
                    Nafas sangat cepat saat istirahat
                  </Text>
                </View>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>Cuping hidung membuka</Text>
                </View>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>Dada tertarik masuk</Text>
                </View>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>Bibir atau kuku membiru</Text>
                </View>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>
                    Tidak bisa minum atau ASI
                  </Text>
                </View>
              </View>
            </View>

            {/* Tindakan */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>✅ Tindakan Segera</Text>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Segera bawa ke fasilitas kesehatan untuk pemeriksaan
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Jangan menunda - sesak nafas bisa berkembang dengan cepat
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.cardBottomLine} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
