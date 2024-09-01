import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import TImingCablist from "../common/TImingCablist";
import AvailableCabList from "../common/AvailableCabList";

const Tes2 = ({ navigation }) => {
  useEffect(() => {
    console.log("i am at ");
  });

  return (
<View>


    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "white",
      }}


      className="flex border-b border-[#C0C0C0] h-[60px]"
    >
      {/* Icon on the Left */}
      <View className="flex flex-row gap-x-[20px] ">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={25} color="black" />
        </TouchableOpacity>

        <View>
          <Text>Aligarh,</Text>

          <Text>Delhi</Text>
        </View>

        <Ionicons name="arrow-forward" size={17} color="gray" />
      </View>

      {/* Center Text */}

      {/* Date on the Right */}
      <View className="flex flex-col items-center  gap-y-[3px]">
        <View className="bg-[#F3F2F8] rounded-[5px] p-[5px] ">

        <Text className="text-[#262628] font-[700] text-[12px]">16 Jan</Text>
        </View>

        <Text className="text-[#262628] font-[300] text-[11px]">Tue</Text>
      </View>
    </View>


<View className="">
<TImingCablist/>
</View>



<View>
  <AvailableCabList/>
</View>






    </View>



  );
};

export default Tes2;
