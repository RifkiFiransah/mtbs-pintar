import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

// Behavior saat notifikasi muncul ketika aplikasi sedang berjalan (foreground)
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export const registerForPushNotificationsAsync = async () => {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
      sound: "default",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      console.log("Failed to get push token for push notification!");
      return;
    }
    // Dapatkan Expo push token (berguna jika remote, tapi kita butuh permissions saja untuk local)
    // token = (await Notifications.getExpoPushTokenAsync({ projectId: 'your-project-id' })).data;
  } else {
    console.log("Must use physical device for Push Notifications");
  }

  return token;
};

export const scheduleReminderNotification = async (
  id: number,
  title: string,
  body: string,
  date: Date,
) => {
  try {
    const triggerInMs = date.getTime() - new Date().getTime();

    // Jangan jadwalkan jika waktu sudah lewat
    if (triggerInMs <= 0) return null;

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        sound: true,
        data: { reminderId: id },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DATE,
        date: date,
      },
    });
    return notificationId;
  } catch (error) {
    console.error("Gagal menjadwalkan notifikasi:", error);
    return null;
  }
};

export const cancelReminderNotification = async (notificationId: string) => {
  try {
    await Notifications.cancelScheduledNotificationAsync(notificationId);
  } catch (error) {
    console.error("Gagal membatalkan notifikasi:", error);
  }
};
