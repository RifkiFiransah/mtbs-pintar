import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CustomHeader } from "../../components/CustomHeader";

interface PenilaianSAGAScreenProps {
  navigation: any;
}

interface SAGAComponent {
  id: string;
  number: number;
  title: string;
  color: string;
  lightColor: string;
  icon: string;
  signs: string[];
  info: string;
}

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - 24; // 12px padding on each side

export const PenilaianSAGAScreen = ({
  navigation,
}: PenilaianSAGAScreenProps) => {
  const sagaComponents: SAGAComponent[] = [
    {
      id: "penampilan",
      number: 1,
      title: "PENAMPILAN",
      color: "#2B9FFF",
      lightColor: "#E3F2FD",
      icon: "👤",
      signs: [
        "Tidak merespons saat diajak melihat",
        "Tidak bisa berinteraksi normal",
        "Sangat lemas atau tidak sadar",
        "Rewel terus atau tidak mau",
        "Kuku jari pucat atau membiru",
      ],
      info: "Mentilai fungsi otak dan tingkat kesadaran anak",
    },
    {
      id: "usaha-napas",
      number: 2,
      title: "USAHA NAPAS",
      color: "#4CAF50",
      lightColor: "#E8F5E9",
      icon: "💨",
      signs: [
        "Napas cepat atau sesak sesak",
        "Tidak ada bunyi dalam bernapas",
        "Cuping hidung kembang-kempis",
        "Bunyi napas tambahan (mengi/krowing/stridor)",
        "Posisi duduk condong ke depan",
      ],
      info: "Mentilai apakah anak kesulitan bernafas",
    },
    {
      id: "sirkulasi",
      number: 3,
      title: "SIRKULASI",
      color: "#FF6B35",
      lightColor: "#FFEBEE",
      icon: "❤️",
      signs: [
        "Kulit pucat",
        "Nadi lemah atau tidak teraba",
        "Tangan/kaki dingin",
        "Kulit tampak seperti marmer",
        "Kulit tampak seperti marmer",
      ],
      info: "Mentilai aliran darah dan oksigen dalam tubuh",
    },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
    },
    scrollContent: {
      paddingHorizontal: 0,
      paddingVertical: 16,
      paddingBottom: 30,
    },
    carouselContainer: {
      marginBottom: 20,
      marginHorizontal: 0,
      paddingHorizontal: 20,
    },
    sagaCard: {
      marginHorizontal: 0,
      marginRight: 12,
      borderRadius: 20,
      overflow: "hidden",
      width: CARD_WIDTH,
      // shadowColor: "#000",
      // shadowOffset: { width: 0, height: 4 },
      // shadowOpacity: 0.12,
      // shadowRadius: 8,
      // elevation: 6,
    },
    cardHeader: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    numberBadge: {
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 12,
    },
    numberText: {
      fontSize: 32,
      fontWeight: "900",
      color: "#FFFFFF",
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "800",
      color: "#FFFFFF",
      textAlign: "center",
      letterSpacing: 1,
    },
    cardContent: {
      backgroundColor: "#FFFFFF",
      paddingVertical: 20,
      paddingHorizontal: 20,
    },
    signsList: {
      marginBottom: 16,
    },
    signItem: {
      flexDirection: "row",
      marginBottom: 12,
      alignItems: "flex-start",
    },
    signBullet: {
      fontSize: 16,
      fontWeight: "700",
      marginRight: 12,
      marginTop: 2,
    },
    signText: {
      flex: 1,
      fontSize: 13,
      color: "#333333",
      lineHeight: 18,
    },
    infoBox: {
      borderTopWidth: 2,
      paddingTop: 14,
      paddingHorizontal: 14,
      paddingVertical: 12,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "flex-start",
    },
    infoIcon: {
      fontSize: 20,
      marginRight: 10,
      marginTop: 2,
    },
    infoText: {
      flex: 1,
      fontSize: 12,
      color: "#333333",
      lineHeight: 16,
      fontWeight: "500",
    },
    definitionSection: {
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
    definitionContent: {
      padding: 20,
    },
    cardBottomLine: {
      height: 4,
      backgroundColor: "#2B9FFF",
      width: "100%",
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
  });

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title="Penilaian SAGA"
        showBack
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.scrollContent}>
          {/* SAGA Cards Carousel */}
          <View style={styles.carouselContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              pagingEnabled
              contentContainerStyle={{ paddingRight: 12 }}
            >
              {sagaComponents.map((component) => (
                <View
                  key={component.id}
                  style={[styles.sagaCard, { width: CARD_WIDTH }]}
                >
                  {/* Header dengan warna */}
                  <View
                    style={[
                      styles.cardHeader,
                      { backgroundColor: component.color },
                    ]}
                  >
                    <View
                      style={[
                        styles.numberBadge,
                        { backgroundColor: component.color },
                        {
                          borderWidth: 4,
                          borderColor: component.lightColor,
                        },
                      ]}
                    >
                      <Text style={styles.numberText}>{component.number}</Text>
                    </View>
                    <Text style={styles.cardTitle}>{component.title}</Text>
                  </View>

                  {/* Content */}
                  <View style={styles.cardContent}>
                    {/* Signs List */}
                    <View style={styles.signsList}>
                      {component.signs.map((sign, index) => (
                        <View key={index} style={styles.signItem}>
                          <Text
                            style={[
                              styles.signBullet,
                              { color: component.color },
                            ]}
                          >
                            •
                          </Text>
                          <Text style={styles.signText}>{sign}</Text>
                        </View>
                      ))}
                    </View>

                    {/* Info Box */}
                    <View
                      style={[
                        styles.infoBox,
                        {
                          borderTopColor: component.color,
                          backgroundColor: component.lightColor,
                        },
                      ]}
                    >
                      <Text style={styles.infoIcon}>💡</Text>
                      <Text
                        style={[styles.infoText, { color: component.color }]}
                      >
                        {component.info}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Content Sections Wrapper */}
          <View style={{ paddingHorizontal: 12 }}>
            {/* Informasi Penting */}
            <View style={styles.definitionSection}>
              <View style={styles.cardTopLine} />
              <View style={styles.definitionContent}>
                <Text style={styles.sectionTitle}>Apa itu SAGA?</Text>
                <Text style={styles.descriptionText}>
                  SAGA merupakan evaluasi komprehensif dan sistematis untuk
                  menentukan status kesehatan anak. Terdiri dari 3 komponen
                  utama: Penampilan, Usaha Napas, dan Sirkulasi.
                </Text>
              </View>
              <View style={styles.cardBottomLine} />
            </View>

            {/* Kapan Dilakukan */}
            <View style={styles.definitionSection}>
              <View style={styles.cardTopLine} />
              <View style={styles.definitionContent}>
                <Text style={styles.sectionTitle}>
                  Kapan Penilaian SAGA Dilakukan?
                </Text>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>
                    Saat anak datang ke fasilitas kesehatan
                  </Text>
                </View>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>
                    Pada pemeriksaan kesehatan rutin balita
                  </Text>
                </View>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>
                    Ketika ada tanda-tanda penyakit atau kelainan
                  </Text>
                </View>
              </View>
              <View style={styles.cardBottomLine} />
            </View>

            {/* Tindak Lanjut */}
            <View style={styles.definitionSection}>
              <View style={styles.cardTopLine} />
              <View style={styles.definitionContent}>
                <Text style={styles.sectionTitle}>
                  Tindak Lanjut Hasil SAGA
                </Text>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bullet}>✓</Text>
                  <Text style={styles.bulletText}>
                    Hasil SAGA menentukan jenis penanganan yang diperlukan
                  </Text>
                </View>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bullet}>✓</Text>
                  <Text style={styles.bulletText}>
                    Dapat berupa terapi awal, rujukan, atau monitoring lanjutan
                  </Text>
                </View>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bullet}>✓</Text>
                  <Text style={styles.bulletText}>
                    Selalu ikuti rekomendasi petugas kesehatan
                  </Text>
                </View>
              </View>
              <View style={styles.cardBottomLine} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
