import { Feather } from "@expo/vector-icons";
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
    section: {
      backgroundColor: "#FFFFFF",
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
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
      color: "#ff3131",
      marginBottom: 12,
      paddingLeft: 8,
    },
    imageView: {
      alignItems: "center",
      marginVertical: 20,
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: "contain",
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
          <View style={styles.section}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
                paddingBottom: 8,
                borderBottomWidth: 2,
                borderBottomColor: "#db719b",
              }}
            >
              <Feather name="alert-triangle" size={18} color="#ff3131" />
              <Text
                style={[
                  styles.sectionTitle,
                  {
                    marginBottom: 0,
                    paddingBottom: 0,
                    borderBottomWidth: 0,
                    marginLeft: 8,
                  },
                ]}
              >
                Tidak Bisa Minum atau Menyusu
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>✅</Text>
              <Text style={styles.bulletText}>
                Berikan minum sedikit demi sedikit
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>✅</Text>
              <Text style={styles.bulletText}>
                Tetap tawarkan ASI sesering mungkin
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>✅</Text>
              <Text style={styles.bulletText}>Pantau tanda dehidrasi</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>❌</Text>
              <Text style={styles.bulletText}>Jangan memaksa anak minum</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>👉</Text>
              <Text style={styles.bulletText}>
                Segera ke fasilitas kesehatan jika anak tetap tidak mau minum
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
                paddingBottom: 8,
                borderBottomWidth: 2,
                borderBottomColor: "#db719b",
              }}
            >
              <Feather name="alert-triangle" size={18} color="#db719b" />
              <Text
                style={[
                  styles.sectionTitle,
                  {
                    marginBottom: 0,
                    paddingBottom: 0,
                    borderBottomWidth: 0,
                    marginLeft: 8,
                  },
                ]}
              >
                Muntah Terus Menerus
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>✅</Text>
              <Text style={styles.bulletText}>
                Berikan cairan sedikit demi sedikit
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>✅</Text>
              <Text style={styles.bulletText}>
                Tunggu beberapa saat setelah muntah
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>✅</Text>
              <Text style={styles.bulletText}>Tetap berikan ASI</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>❌</Text>
              <Text style={styles.bulletText}>
                Jangan memberi makan/minum banyak sekaligus
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>👉</Text>
              <Text style={styles.bulletText}>
                Segera ke fasilitas kesehatan jika muntah terus menerus
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
                paddingBottom: 8,
                borderBottomWidth: 2,
                borderBottomColor: "#db719b",
              }}
            >
              <Feather name="alert-triangle" size={18} color="#db719b" />
              <Text
                style={[
                  styles.sectionTitle,
                  {
                    marginBottom: 0,
                    paddingBottom: 0,
                    borderBottomWidth: 0,
                    marginLeft: 8,
                  },
                ]}
              >
                Kejang
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>✅</Text>
              <Text style={styles.bulletText}>
                Baringkan anak di tempat aman
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>✅</Text>
              <Text style={styles.bulletText}>Miringkan kepala/tubuh</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>✅</Text>
              <Text style={styles.bulletText}>Longgarkan pakaian</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>✅</Text>
              <Text style={styles.bulletText}>Catat lama kejang</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>❌</Text>
              <Text style={styles.bulletText}>
                Jangan memasukkan benda ke mulut
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>❌</Text>
              <Text style={styles.bulletText}>
                Jangan menahan gerakan kejang
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>👉</Text>
              <Text style={styles.bulletText}>
                Segera ke fasilitas kesehatan
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
                paddingBottom: 8,
                borderBottomWidth: 2,
                borderBottomColor: "#db719b",
              }}
            >
              <Feather name="alert-triangle" size={18} color="#db719b" />
              <Text
                style={[
                  styles.sectionTitle,
                  {
                    marginBottom: 0,
                    paddingBottom: 0,
                    borderBottomWidth: 0,
                    marginLeft: 8,
                  },
                ]}
              >
                Tidak Sadar / Sangat Lemas
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>✅</Text>
              <Text style={styles.bulletText}>Coba bangunkan perlahan</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>✅</Text>
              <Text style={styles.bulletText}>Periksa napas anak</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>✅</Text>
              <Text style={styles.bulletText}>
                Miringkan tubuh jika tidak sadar
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>❌</Text>
              <Text style={styles.bulletText}>Jangan beri makan/minum</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>👉</Text>
              <Text style={styles.bulletText}>
                Segera ke fasilitas kesehatan
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
                paddingBottom: 8,
                borderBottomWidth: 2,
                borderBottomColor: "#db719b",
              }}
            >
              <Feather name="alert-triangle" size={18} color="#db719b" />
              <Text
                style={[
                  styles.sectionTitle,
                  {
                    marginBottom: 0,
                    paddingBottom: 0,
                    borderBottomWidth: 0,
                    marginLeft: 8,
                  },
                ]}
              >
                Sesak Napas / Napas Cepat
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>✅</Text>
              <Text style={styles.bulletText}>
                Posisikan anak nyaman (setengah duduk)
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>✅</Text>
              <Text style={styles.bulletText}>Longgarkan pakaian</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>✅</Text>
              <Text style={styles.bulletText}>Pantau napas anak</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>👉</Text>
              <Text style={styles.bulletText}>
                Jangan menunda mencari bantuan
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>👉</Text>
              <Text style={styles.bulletText}>
                Segera ke fasilitas kesehatan jika sesak atau tarikan dada
              </Text>
            </View>
          </View>

          {/* Image View */}
          {/* <View style={styles.imageView}>
            <Image
              source={require("../assets/images/kejang.png")}
              style={styles.image}
            />
          </View> */}

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
