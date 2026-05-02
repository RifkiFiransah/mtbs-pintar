import { MaterialIcons } from "@expo/vector-icons";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface BerandaScreenProps {
  navigation: any;
}

export const BerandaScreen = ({ navigation }: BerandaScreenProps) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: "#F8F9FA",
    },
    headerSection: {
      backgroundColor: "#2B9FFF",
      paddingBottom: 15,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      overflow: "hidden",
      position: "relative",
    },
    logoContainer: {
      alignItems: "center",
      paddingTop: 50,
    },
    logo: {
      width: 120,
      height: 120,
      resizeMode: "contain",
    },
    headerContent: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    headerText: {
      alignItems: "center",
    },
    greeting: {
      fontSize: 22,
      fontWeight: "700",
      color: "#FFFFFF",
      marginBottom: 8,
    },
    subtext: {
      fontSize: 14,
      color: "#FFFFFF",
      fontWeight: "600",
      lineHeight: 20,
      textAlign: "center",
    },
    illustration: {
      display: "none",
    },
    scrollContent: {
      paddingHorizontal: 16,
      paddingVertical: 35,
      paddingBottom: 30,
    },
    menuGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: 12,
    },
    menuCardLarge: {
      width: "48%",
      backgroundColor: "#FFFFFF",
      borderRadius: 16,
      padding: 16,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 3,
      minHeight: 150,
    },
    menuCardSmall: {
      width: "48%",
      backgroundColor: "#FFFFFF",
      borderRadius: 16,
      padding: 20,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 3,
      minHeight: 140,
    },
    menuCardFull: {
      width: "100%",
      backgroundColor: "#FFFFFF",
      borderRadius: 16,
      padding: 20,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 3,
      minHeight: 100,
    },
    iconContainer: {
      width: 60,
      height: 60,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 12,
    },
    iconWarning: {
      backgroundColor: "#FF5252",
    },
    iconCheckmark: {
      backgroundColor: "#2563EB",
    },
    iconMedical: {
      backgroundColor: "#FF5252",
    },
    iconHospital: {
      backgroundColor: "#2563EB",
    },
    iconQuestion: {
      backgroundColor: "#2563EB",
    },
    menuTitle: {
      fontSize: 15,
      fontWeight: "700",
      color: "#1E3A8A",
      textAlign: "center",
      marginBottom: 4,
    },
    menuDescription: {
      fontSize: 12,
      color: "#666666",
      textAlign: "center",
      lineHeight: 16,
    },
  });

  const menuItems = [
    {
      id: "warning",
      title: "Tanda Bahaya\nUmum",
      icon: "warning",
      iconColor: "#FFFFFF",
      bgColor: "#FF5252",
      onPress: () => navigation.navigate("TandaBahaya"),
    },
    {
      id: "checkmark",
      title: "Cek Kondisi\nBalita",
      icon: "check-circle",
      iconColor: "#FFFFFF",
      bgColor: "#2563EB",
      onPress: () => navigation.navigate("CekKondisi"),
    },
    {
      id: "medical",
      title: "Apa yang harus\nDilakukan",
      icon: "medical-services",
      iconColor: "#FFFFFF",
      bgColor: "#FF5252",
      onPress: () => navigation.navigate("Tindakan"),
    },
    {
      id: "hospital",
      title: "Perawatan\nDi Rumah",
      icon: "local-hospital",
      iconColor: "#FFFFFF",
      bgColor: "#2563EB",
      onPress: () => {},
    },
    {
      id: "question",
      title: "Tanya Jawab",
      icon: "help",
      iconColor: "#FFFFFF",
      bgColor: "#2563EB",
      onPress: () => navigation.navigate("TanyaJawab"),
      fullWidth: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/images/logos/utama.png")}
              style={styles.logo}
            />
          </View>
          <View style={styles.headerContent}>
            <View style={styles.headerText}>
              <Text style={styles.greeting}>👋 Halo, Ibu</Text>
              <Text style={styles.subtext}>
                Ayo belajar bersama tentang kesehatan balita
              </Text>
              <Text style={[styles.subtext, { marginTop: 12 }]}>
                Kenali Tanda Bahaya Sejak Dini!!
              </Text>
            </View>
          </View>
        </View>

        {/* Menu Grid */}
        <View style={styles.scrollContent}>
          <View style={styles.menuGrid}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={
                  item.fullWidth ? styles.menuCardFull : styles.menuCardLarge
                }
                onPress={item.onPress}
                activeOpacity={0.7}
              >
                <View
                  style={[
                    styles.iconContainer,
                    { backgroundColor: item.bgColor },
                  ]}
                >
                  <MaterialIcons
                    name={item.icon as any}
                    size={32}
                    color={item.iconColor}
                  />
                </View>
                <Text style={styles.menuTitle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
