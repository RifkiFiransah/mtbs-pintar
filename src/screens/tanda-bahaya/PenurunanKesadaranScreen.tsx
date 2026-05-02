import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomHeader } from "../../components/CustomHeader";

interface PenurunanKesadaranScreenProps {
  navigation: any;
}

export const PenurunanKesadaranScreen = ({
  navigation,
}: PenurunanKesadaranScreenProps) => {
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
        title="Penampilan Anak Berubah / Penurunan Kesadaran"
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
                Anak tampak sangat sakit, tidak responsif, atau berubah drastis
                dari keadaan normalnya, bisa menandakan kondisi serius.
              </Text>
            </View>

            {/* Cara Menilai */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                Cara Menilai "Tidak Sadar"
              </Text>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Anak anggap tidak seperti biasanya, sulit dibangungkan, tidak
                  merepon, atau sangat lemas
                </Text>
              </View>

              <View style={styles.warningBox}>
                <Text style={styles.warningTitle}>⚠️ Apa Berbahaya?</Text>
                <Text style={styles.warningText}>
                  Bisa menjadi tanda kondisi gawat seperti infeksi berat atau
                  gangguan pada otak.
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
                  Tidak sadar atau sulit dibangungkan
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Tidak merespon saat dipanggil
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>Tatapan kosong</Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Sangat lemas atau tidak bergerak
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Rewel terus atau justru sangat diam
                </Text>
              </View>

              <View style={styles.cautionBox}>
                <Text style={styles.cautionTitle}>
                  🔍 Tanda Anak Mulai Dehidrasi
                </Text>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>
                    Tidak sadar atau sulit dibangungkan
                  </Text>
                </View>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>
                    Tidak merespon saat dipanggil
                  </Text>
                </View>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>Tatapan kosong</Text>
                </View>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>
                    Sangat lemas atau tidak bergerak
                  </Text>
                </View>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>
                    Rewel terus atau justru sangat diam
                  </Text>
                </View>
              </View>
            </View>

            {/* Perhatian */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>✅ Tindakan Segera</Text>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Segera bawa ke fasilitas kesehatan
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Catat kapan perubahan mulai terjadi
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  Perhatikan gejala lain yang menyertai
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
