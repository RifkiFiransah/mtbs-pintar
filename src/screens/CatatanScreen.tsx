import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BackgroundWrapper } from "../components/BackgroundWrapper";
import { CustomHeader } from "../components/CustomHeader";

interface CatatanScreenProps {
  navigation: any;
}

export const CatatanScreen = ({ navigation }: CatatanScreenProps) => {
  const [activeTab, setActiveTab] = useState("Riwayat Cek");

  // State untuk filter kalender
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (event: any, date?: Date) => {
    setShowDatePicker(Platform.OS === "ios");
    if (date) {
      setSelectedDate(date);
    }
  };

  const clearFilter = () => {
    setSelectedDate(null);
  };

  const tabs = ["Riwayat Cek", "Keluhan", "Pemeriksaan"];

  const riwayatData = [
    {
      date: "20 Mei 2024",
      time: "09.30",
      status: "Normal",
      statusColor: "#E8F5E9",
      statusTextColor: "#4CAF50",
      details: [
        { label: "Suhu tubuh", value: "36,7 °C", icon: "thermometer-outline" },
        { label: "Nafsu makan", value: "Baik", icon: "restaurant-outline" },
        { label: "Muntah", value: "Tidak ada", icon: "warning-outline" },
        { label: "Rewel", value: "Tidak ada", icon: "water-outline" },
        { label: "Batuk", value: "Ringan", icon: "medkit-outline" },
      ],
    },
    {
      date: "18 Mei 2024",
      time: "10.15",
      status: "Normal",
      statusColor: "#E8F5E9",
      statusTextColor: "#4CAF50",
      details: [
        { label: "Suhu tubuh", value: "36,6 °C", icon: "thermometer-outline" },
        { label: "Nafsu makan", value: "Baik", icon: "restaurant-outline" },
        { label: "Muntah", value: "Tidak ada", icon: "warning-outline" },
        { label: "Lemes", value: "Tidak ada", icon: "water-outline" },
        { label: "Batuk", value: "Tidak ada", icon: "medkit-outline" },
      ],
    },
    {
      date: "15 Mei 2024",
      time: "08.45",
      status: "Perlu Perhatian",
      statusColor: "#FFF3E0",
      statusTextColor: "#FF9800",
      details: [
        { label: "Suhu tubuh", value: "37,8 °C", icon: "thermometer-outline" },
        { label: "Nafsu makan", value: "Kurang", icon: "restaurant-outline" },
        { label: "Lemes", value: "Ada", icon: "water-outline" },
      ],
    },
  ];

  const getFilteredData = () => {
    let filtered = riwayatData;
    if (selectedDate) {
      const formattedFilterDate = selectedDate.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      // Memfilter dengan asumsi format di hardcode text mirip, pada real system pakailah datetime format ISO.
      filtered = filtered.filter(
        (item) =>
          item.date === formattedFilterDate ||
          item.date.includes(selectedDate.getDate().toString()),
      );
    }
    return filtered;
  };

  const dataToDisplay = getFilteredData();

  return (
    <BackgroundWrapper>
      {/* <SafeAreaView style={styles.container}> */}
      <CustomHeader
        title="Catatan"
        rightAction={{
          icon: "event-note",
          onPress: () => setShowDatePicker(true),
        }}
      />

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {selectedDate && (
        <View style={styles.filterBanner}>
          <Text style={styles.filterText}>
            Filter Tanggal: {selectedDate.toLocaleDateString("id-ID")}
          </Text>
          <TouchableOpacity onPress={clearFilter}>
            <Ionicons name="close-circle" size={20} color="#1E88E5" />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabTextContainer,
              activeTab === tab && styles.activeTab,
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        {dataToDisplay.length === 0 ? (
          <View style={{ alignItems: "center", marginTop: 40 }}>
            <Text style={{ color: "#666" }}>
              Tidak ada catatan pada tanggal ini.
            </Text>
          </View>
        ) : (
          dataToDisplay.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.recordCard}
              onPress={() =>
                navigation.navigate("FormCatatan", { isDetail: true })
              }
            >
              <View style={styles.recordHeader}>
                <Text style={styles.recordDateTime}>
                  <Text style={{ fontWeight: "700", color: "#1E3A8A" }}>
                    {item.date}
                  </Text>{" "}
                  • {item.time}
                </Text>
                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: item.statusColor },
                  ]}
                >
                  <Text
                    style={[styles.statusText, { color: item.statusTextColor }]}
                  >
                    {item.status}
                  </Text>
                </View>
              </View>

              <View style={styles.divider} />

              <View style={styles.detailsContainer}>
                {item.details.map((detail, idx) => (
                  <View key={idx} style={styles.detailRow}>
                    <View style={styles.detailLabelContainer}>
                      <Ionicons
                        name={detail.icon as any}
                        size={14}
                        color="#999"
                        style={styles.detailIcon}
                      />
                      <Text style={styles.detailLabel}>{detail.label}</Text>
                    </View>
                    <View style={styles.detailValueContainer}>
                      <Text style={styles.detailValue}>{detail.value}</Text>
                      {/* {(detail.label === "Muntah" ||
                        detail.label === "Diare") && (
                        <Ionicons
                          name="chevron-forward"
                          size={14}
                          color="#999"
                          style={{ marginLeft: 4 }}
                        />
                      )} */}
                    </View>
                  </View>
                ))}
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("FormCatatan")}
      >
        <Ionicons name="add" size={24} color="#FFF" />
      </TouchableOpacity>
      {/* </SafeAreaView> */}
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  tabsContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
    justifyContent: "space-between",
  },
  tabTextContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: "#E3F2FD",
  },
  tabText: {
    color: "#666",
    fontSize: 14,
    fontWeight: "500",
  },
  filterBanner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E3F2FD",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  filterText: {
    color: "#1E88E5",
    fontWeight: "600",
    fontSize: 13,
  },
  activeTabText: {
    color: "#1E88E5",
    fontWeight: "700",
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  recordCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recordHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recordDateTime: {
    fontSize: 14,
    color: "#666",
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 12,
  },
  detailsContainer: {
    gap: 8,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 120,
  },
  detailIcon: {
    marginRight: 8,
  },
  detailLabel: {
    fontSize: 13,
    color: "#666",
  },
  detailValueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailValue: {
    fontSize: 13,
    color: "#333",
    fontWeight: "500",
  },
  fab: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 24,
    bottom: 24,
    backgroundColor: "#1E88E5",
    borderRadius: 28,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
});
