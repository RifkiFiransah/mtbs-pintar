import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomHeader } from "../components/CustomHeader";

interface CekKondisiScreenProps {
  navigation: any;
}

export const CekKondisiScreen = ({ navigation }: CekKondisiScreenProps) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
    },
    scrollContent: {
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    questionCard: {
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
    question: {
      fontSize: 15,
      fontWeight: "600",
      color: "#1E3A8A",
      marginBottom: 12,
    },
    description: {
      fontSize: 13,
      color: "#666666",
      lineHeight: 18,
    },
    categoryTitle: {
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
        title="Cek Kondisi Balita"
        showBack
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.container}>
        <View style={styles.scrollContent}>
          <Text style={styles.categoryTitle}>Gejala Umum</Text>
          <View style={styles.questionCard}>
            <Text style={styles.question}>1. Apakah balita demam?</Text>
            <Text style={styles.description}>
              Demam adalah peningkatan suhu tubuh di atas 37.5°C atau terasa
              panas saat diraba.
            </Text>
          </View>

          <View style={styles.questionCard}>
            <Text style={styles.question}>
              2. Apakah balita menangis dengan keras dan terus-menerus?
            </Text>
            <Text style={styles.description}>
              Menangis terus-menerus bisa menunjukkan ketidaknyamanan atau rasa
              sakit.
            </Text>
          </View>

          <Text style={styles.categoryTitle}>Kondisi Umum</Text>
          <View style={styles.questionCard}>
            <Text style={styles.question}>
              3. Apakah balita dapat minum atau menyusu seperti biasa?
            </Text>
            <Text style={styles.description}>
              Ketidakmampuan makan/minum bisa menjadi tanda masalah kesehatan
              serius.
            </Text>
          </View>

          <View style={styles.questionCard}>
            <Text style={styles.question}>4. Apakah balita muntah?</Text>
            <Text style={styles.description}>
              Muntah berulang dapat menyebabkan dehidrasi yang berbahaya.
            </Text>
          </View>

          <Text style={styles.categoryTitle}>Pernapasan</Text>
          <View style={styles.questionCard}>
            <Text style={styles.question}>
              5. Apakah balita mengalami kesulitan bernapas?
            </Text>
            <Text style={styles.description}>
              Kesulitan bernapas memerlukan penanganan medis segera.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
