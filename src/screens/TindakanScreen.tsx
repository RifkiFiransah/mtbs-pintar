import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomHeader } from "../components/CustomHeader";

interface TindakanScreenProps {
  navigation: any;
}

export const TindakanScreen = ({ navigation }: TindakanScreenProps) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
    },
    scrollContent: {
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    actionCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: "#4CAF50",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    actionTitle: {
      fontSize: 15,
      fontWeight: "700",
      color: "#1B5E20",
      marginBottom: 8,
    },
    actionItem: {
      fontSize: 13,
      color: "#666666",
      lineHeight: 20,
      marginBottom: 6,
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
        title="Apa Yang Harus Dilakukan"
        showBack
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.container}>
        <View style={styles.scrollContent}>
          <Text style={styles.sectionTitle}>Penanganan Awal di Rumah</Text>

          <View style={styles.actionCard}>
            <Text style={styles.actionTitle}>Untuk Demam</Text>
            <Text style={styles.actionItem}>
              • Kompres dengan air hangat di kening dan lipatan paha
            </Text>
            <Text style={styles.actionItem}>• Berikan minum yang cukup</Text>
            <Text style={styles.actionItem}>
              • Jika diperlukan, berikan obat penurun panas sesuai dosis usia
            </Text>
          </View>

          <View style={styles.actionCard}>
            <Text style={styles.actionTitle}>Untuk Diare</Text>
            <Text style={styles.actionItem}>
              • Berikan cairan oralit atau air matang hangat
            </Text>
            <Text style={styles.actionItem}>
              • Lanjutkan pemberian ASI atau susu
            </Text>
            <Text style={styles.actionItem}>
              • Berikan makanan yang mudah dicerna
            </Text>
          </View>

          <View style={styles.actionCard}>
            <Text style={styles.actionTitle}>Untuk Batuk/Pilek</Text>
            <Text style={styles.actionItem}>
              • Pastikan udara di kamar lembab
            </Text>
            <Text style={styles.actionItem}>• Berikan minum hangat</Text>
            <Text style={styles.actionItem}>
              • Angkat kepala saat tidur dengan bantal tambahan
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Kapan Harus ke Rumah Sakit?</Text>

          <View style={styles.actionCard}>
            <Text style={styles.actionItem}>
              • Jika muncul tanda bahaya serius
            </Text>
            <Text style={styles.actionItem}>
              • Kondisi tidak membaik setelah 3 hari perawatan di rumah
            </Text>
            <Text style={styles.actionItem}>
              • Balita menjadi semakin lemah atau tidak responsif
            </Text>
            <Text style={styles.actionItem}>
              • Muncul gejala baru yang mengkhawatirkan
            </Text>
            <Text style={styles.actionItem}>
              • Persisten muntah-muntah sehingga tidak bisa makan/minum
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
