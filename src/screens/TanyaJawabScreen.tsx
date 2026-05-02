import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomHeader } from "../components/CustomHeader";

interface TanyaJawabScreenProps {
  navigation: any;
}

export const TanyaJawabScreen = ({ navigation }: TanyaJawabScreenProps) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
    },
    scrollContent: {
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    faqCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    question: {
      fontSize: 14,
      fontWeight: "700",
      color: "#1E3A8A",
      marginBottom: 8,
    },
    answer: {
      fontSize: 13,
      color: "#666666",
      lineHeight: 20,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title="Tanya Jawab"
        showBack
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.container}>
        <View style={styles.scrollContent}>
          <View style={styles.faqCard}>
            <Text style={styles.question}>
              Q: Bagaimana cara mengukur suhu tubuh balita dengan benar?
            </Text>
            <Text style={styles.answer}>
              A: Gunakan termometer digital atau infrared. Untuk termometer
              digital, letakkan di ketiak selama 5 menit. Untuk infrared,
              arahkan ke dahi atau telinga.
            </Text>
          </View>

          <View style={styles.faqCard}>
            <Text style={styles.question}>
              Q: Kapan saya harus memberikan obat penurun panas?
            </Text>
            <Text style={styles.answer}>
              A: Berikan jika suhu tubuh sebesar 38.5 derajat Celsius atau
              balita merasa tidak nyaman. Selalu ikuti dosis sesuai berat badan
              anak.
            </Text>
          </View>

          <View style={styles.faqCard}>
            <Text style={styles.question}>
              Q: Apa tanda-tanda dehidrasi pada balita?
            </Text>
            <Text style={styles.answer}>
              A: Tanda dehidrasi meliputi: mulut kering, bibir pucat, mata
              cekung, tidak buang air kecil selama lebih dari 6 jam, dan
              tangisan tanpa air mata.
            </Text>
          </View>

          <View style={styles.faqCard}>
            <Text style={styles.question}>
              Q: Haruskah saya terus memberikan ASI saat balita sakit?
            </Text>
            <Text style={styles.answer}>
              A: Ya, sebaiknya lanjutkan ASI karena mengandung antibodi yang
              membantu penyembuhan. Jika balita muntah, berikan lebih sering
              dengan porsi kecil.
            </Text>
          </View>

          <View style={styles.faqCard}>
            <Text style={styles.question}>
              Q: Berapa lama sebaiknya memantau gejala sebelum ke dokter?
            </Text>
            <Text style={styles.answer}>
              A: Jika ada tanda bahaya, segera ke dokter. Jika gejala ringan,
              pantau 24-48 jam. Jika tidak membaik atau semakin buruk,
              konsultasi dengan dokter.
            </Text>
          </View>

          <View style={styles.faqCard}>
            <Text style={styles.question}>
              Q: Apa perbedaan antara batuk biasa dan batuk berbahaya?
            </Text>
            <Text style={styles.answer}>
              A: Batuk biasa tidak mengganggu napas, tidak ada mengi, dan anak
              tetap aktif. Batuk berbahaya disertai napas cepat, mengi, atau
              kesulitan bernapas.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
