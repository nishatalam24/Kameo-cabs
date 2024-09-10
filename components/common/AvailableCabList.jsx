import { View, Text, ScrollView } from "react-native";
import React from "react";
import SeatIcone from "../../icons/SeatIcone";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

const carsData = [
  {
    carName: "Wagon R",
    startTime: "05:30",
    endTime: "09:50",
    totalDuration: "2h 59m",
    seatsLeft: "2",
    seatFor: "1",
    fare: "579.45"
  },
  {
    carName: "Wagon R",
    startTime: "05:30",
    endTime: "09:50",
    totalDuration: "2h 59m",
    seatsLeft: "2",
    seatFor: "1",
    fare: "579.45"
  },  {
    carName: "Wagon R",
    startTime: "05:30",
    endTime: "09:50",
    totalDuration: "2h 59m",
    seatsLeft: "2",
    seatFor: "1",
    fare: "579.45"
  },  {
    carName: "Wagon R",
    startTime: "05:30",
    endTime: "09:50",
    totalDuration: "2h 59m",
    seatsLeft: "2",
    seatFor: "1",
    fare: "579.45"
  },  {
    carName: "Wagon R",
    startTime: "05:30",
    endTime: "09:50",
    totalDuration: "2h 59m",
    seatsLeft: "2",
    seatFor: "1",
    fare: "579.45"
  },
  // You can add more car data here
];

const AvailableCabList = () => {

  const navigation = useNavigation();

  return (
    <ScrollView className="w-screen h-[75vh]  bg-[#F3F2F9]">
      {carsData.map((car, index) => (
        <View key={index} className="w-full flex flex-row justify-center py-[20px] ">
          <TouchableOpacity    onPress={() => navigation.navigate('SelectSeats')}>
            <View className="w-[90vw] rounded-[10px] py-[2px] px-[15px] gap-y-[10px] bg-white border border-[#E5E5E5]">
              {/* carName */}
              <Text className="font-[600] text-[15px]">{car.carName}</Text>

              <View className="flex flex-row justify-between">
                <View className="flex flex-row items-center gap-x-[5px]">
                  {/* startTime */}
                  <Text className="font-[600] text-[16px]">{car.startTime}</Text>

                  {/* totalDuration */}
                  <Text className="font-[500] text-[12px] text-[#B4B4B4]">
                    - {car.totalDuration} -
                  </Text>
                  
                  {/* endTime */}
                  <Text className="font-[600] text-[16px]">{car.endTime}</Text>
                </View>

                {/* fare */}
                <Text>₹{car.fare}</Text>
              </View>

              <View className="border-t border-[#D1D1D1] py-[10px] flex flex-row justify-between">
                {/* seatsLeft */}
                <Text className="font-[500] text-[12px] text-[#929292]">
                  {car.seatsLeft} Seats Left
                </Text>
                <View className="flex flex-row items-center">
                  {/* seatFor */}
                  <Text className="font-[700] text-[12px] text-[#D1D1D1] right-[5px]">
                    ({car.seatFor})
                  </Text>
                  <SeatIcone />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default AvailableCabList;
