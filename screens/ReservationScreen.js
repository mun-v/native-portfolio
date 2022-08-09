import { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Switch,
  Button,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Animatable from "react-native-animatable";
import * as Notifications from "expo-notifications";

const ReservationScreen = () => {
  const [dancers, setDancers] = useState(1);
  const [dropIn, setDropIn] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowCalendar(Platform.OS === "ios");
    setDate(currentDate);
  };

  const handleReservation = () => {
    console.log("dancers:", dancers);
    console.log("dropIn:", dropIn);
    console.log("date:", date);

    Alert.alert(
      "Begin search?",
      "Number of Dancers: " +
        dancers +
        "\n\nDrop-In: " +
        dropIn +
        "\n\nDate: " +
        date.toLocaleDateString(),
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => resetForm(),
        },
        {
          text: "OK",
          onPress: () => {
            presentLocalNotification(date.toLocaleDateString("en-US"));
            resetForm();
          },
        },
      ]
    );
  };

  const resetForm = () => {
    setDancers(1);
    setDropIn(false);
    setDate(new Date());
    setShowCalendar(false);
  };

  const presentLocalNotification = async (reservationDate) => {
    const sendNotification = () => {
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: true,
        }),
      });

      Notifications.scheduleNotificationAsync({
        content: {
          title: "Your Class Reservation Search",
          body: `Search for ${reservationDate} requested`,
        },
        trigger: null,
      });
    };

    let permissions = await Notifications.getPermissionsAsync();
    if (!permissions.granted) {
      permissions = await Notifications.requestPermissionsAsync();
    }
    if (permissions.granted) {
      sendNotification();
    }
  };

  return (
    <ScrollView>
      <Animatable.View animation="zoomIn" duration={2000} delay={1000}>
        <View style={StyleSheet.formRow}>
          <Text style={StyleSheet.formLabel}>Number of Dancers:</Text>
          <Picker
            style={styles.formItem}
            selectedValue={dancers}
            onValueChange={(itemValue) => setDancers(itemValue)}
          >
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
            <Picker.Item label="5" value={5} />
            <Picker.Item label="6" value={6} />
          </Picker>
        </View>
        <View styles={styles.formRow}>
          <Text styles={styles.formLabel}>Drop In:</Text>
          <Switch
            style={styles.formItem}
            value={dropIn}
            trackColor={{ true: "#FB751B", false: null }}
            onValueChange={(value) => setDropIn(value)}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Date:</Text>
          <Button
            onPress={() => setShowCalendar(!showCalendar)}
            title={date.toLocaleDateString("en-US")}
            color="#FB751B"
            accessibilityLabel="Tap me to select a reservation date"
          />
        </View>
        {showCalendar && (
          <DateTimePicker
            style={styles.formItem}
            value={date}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
        <View style={styles.formRow}>
          <Button
            onPress={() => handleReservation()}
            title="Search Availability"
            color="#FB751B"
            accessibilityLabel="Tap me to search for available classes to reserve"
          />
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  formLabel: {
    fontSize: 18,
    flex: 2,
  },
  formItem: {
    flex: 1,
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#FB751B",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
});

export default ReservationScreen;
