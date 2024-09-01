import React, { useState } from 'react';
import { View, Button, Modal, StyleSheet, Text } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CalenderIcon from '../../icons/CalenderIcon';

const CalenderPicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);

  const onDateChange = (date) => {
    setSelectedStartDate(date);
    setModalVisible(false); // Close the modal after selecting a date
  };

  return (
    // <View style={styles.container}>
    <View >
      {/* <Button title="Open Calendar" onPress={() => setModalVisible(true)} /> */}
<TouchableOpacity onPress={() => setModalVisible(true)}>
 <CalenderIcon/>
</TouchableOpacity>

      {selectedStartDate && (
        <Text style={styles.selectedDateText}>
          Selected Date: {selectedStartDate.toString()}
        </Text>
      )}

<View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        className=""
    

      >
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <CalendarPicker onDateChange={onDateChange} />
            <Button title="Close" onPress={() => setModalVisible(false)} />


          </View>
        </View>

      </Modal>


      </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  selectedDateText: {
    marginTop: 20,
    fontSize: 18,
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  calendarContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default CalenderPicker;