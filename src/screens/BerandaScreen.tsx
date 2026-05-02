import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomHeader } from "../components/CustomHeader";
import { MenuCard } from "../components/MenuCard";

interface BerandaScreenProps {
  navigation: any;
}

export const BerandaScreen = ({ navigation }: BerandaScreenProps) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
    },
    scrollContent: {
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    greeting: {
      fontSize: 20,
      fontWeight: "700",
      color: "#1E3A8A",
      marginBottom: 8,
    },
    subtext: {
      fontSize: 13,
      color: "#666666",
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: "#1E3A8A",
      marginTop: 20,
      marginBottom: 12,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Halo, Ibu!" />
      <ScrollView style={styles.container}>
        <View style={styles.scrollContent}>
          <Text style={styles.greeting}>Selamat datang!</Text>
          <Text style={styles.subtext}>
            Ayo belajar bersama tentang kesehatan balita. Kenali tanda bahaya
            sejak dini!
          </Text>

          <Text style={styles.sectionTitle}>Menu Utama</Text>
          <MenuCard
            icon="warning"
            title="Tanda Bahaya Umum"
            description="Pelajari tanda-tanda bahaya kesehatan balita"
            onPress={() => navigation.navigate("TandaBahaya")}
          />

          <MenuCard
            icon="clipboard"
            title="Cek Kondisi Balita"
            description="Lakukan asesmen kesehatan balita Anda"
            onPress={() => navigation.navigate("CekKondisi")}
          />

          <MenuCard
            icon="medical-services"
            title="Apa Yang Harus Dilakukan"
            description="Panduan tindakan untuk berbagai kondisi"
            onPress={() => navigation.navigate("Tindakan")}
          />

          <MenuCard
            icon="local-hospital"
            title="Perawatan di Rumah"
            description="Tips merawat balita di rumah dengan benar"
            onPress={() => {}}
          />

          <MenuCard
            icon="help"
            title="Tanya Jawab"
            description="Pertanyaan umum tentang kesehatan balita"
            onPress={() => navigation.navigate("TanyaJawab")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
