import { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Switch,
  Button,
  Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

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
    setShowModal(!showModal);
  };

  const resetForm = () => {
    setDancers(1);
    setDropIn(false);
    setDate(new Date());
    setShowCalendar(false);
  };

  return (
    <ScrollView>
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
          trackColor={{ true: "#5637DD", false: null }}
          onValueChange={(value) => setDropIn(value)}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.formLabel}>Date:</Text>
        <Button
          onPress={() => setShowCalendar(!showCalendar)}
          title={date.toLocaleDateString("en-US")}
          color="#5637DD"
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
          color="#5637DD"
          accessibilityLabel="Tap me to search for available classes to reserve"
        />
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
      >
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Search Class Reservations</Text>
          <Text style={styles.modalText}>Number of Dancers: {dancers}</Text>
          <Text style={styles.modalText}>
            Drop-In?: {dropIn ? "Yes" : "No"}
          </Text>
          <Text style={styles.modalText}>
            Date: {date.toLocaleDateString("en-US")}
          </Text>
          <Button
            onPress={() => {
              setShowModal(!showModal);
              resetForm();
            }}
            color="#5637DD"
            title="Close"
          />
        </View>
      </Modal>
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
    backgroundColor: "#5637DD",
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