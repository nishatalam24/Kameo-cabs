import { View, Text, TouchableOpacity, ScrollView, Image,PanResponder,Animated } from "react-native";
import React, { useState,useRef } from  "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Car6Seater from "../../assets/Car6Seater.jpeg";
import Car4Seater from "../../assets/Car4Seater.jpeg";
import CommonBtn from "../common/CommonBtn";

const SelectSeats = ({ navigation }) => {
  const [selectedPrice, setSelectedPrice] = useState(null); // State to track selected price

  const priceData = ["500", "600", "700"];


  const [isVisible, setIsVisible] = useState(false); // Control drawer visibility
  const drawerHeight = 200; // Height of the drawer
  const startY = useRef(new Animated.Value(drawerHeight)).current;



  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dy > 0) { // Only allow dragging down
          startY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > drawerHeight / 2) {
          // If dragged down more than halfway, hide the drawer
          Animated.timing(startY, {
            toValue: drawerHeight,
            duration: 300,
            useNativeDriver: true,
          }).start(() => setIsVisible(false));
        } else {
          // Otherwise, snap back to the open position
          Animated.timing(startY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;



  const openDrawer = () => {
    setIsVisible(true);
    Animated.timing(startY, {
      toValue: 0, // Slide up
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

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
        <View className="flex flex-row gap-x-[20px] ">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={25} color="black" />
          </TouchableOpacity>

          <View className="flex flex-col w-[70vw] items-center gap-y-[3px] ">
            <Text className="text-[14px] font-[500]">Select Seats</Text>
            <View className="gap-x-[10px] flex flex-row  items-center">
              <Text className="text-[14px] font-[500]">Aligarh</Text>
              <Ionicons name="arrow-forward" size={13} color="gray" />

              <Text className="text-[14px] font-[500]">Delhi</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="bg-white  flex-row items-center justify-between px-[10px] py-[10px]">
        <View className="w-[89px] h-[29px] bg-black rounded-[10px] items-center justify-center">
          <Text className="font-[500] text-white">All Prices</Text>
        </View>

        {priceData.map((price, index) => (
          <TouchableOpacity
            key={index}
            // className="w-[68px] h-[29px] border rounded-[10px] items-center justify-center"
            onPress={() => setSelectedPrice(price)} // Handle price selection
            className={` ${
              selectedPrice === price
                ? " bg-[#326BFF] border-none"
                : "border border-[#A1A1A1]"
            }  
          w-[68px] h-[29px]  rounded-[10px] items-center justify-center
          `}
          >
            <Text
              className={`font-[500] ${
                selectedPrice === price ? "text-white" : ""
              }`} // Conditional text color
            >
              ₹ {price}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView className="h-[88vh]  bg-white flex flex-col ">

        <View className="gap-y-[30px]">

        <View className=" w-screen flex flex-row justify-center">
          <Image source={Car6Seater} className="h-[470px] w-[229px] " />
        </View>




        <View className="flex flex-row justify-around ">
          <View className="flex flex-row items-center gap-x-[5px]">
            <Text>Available</Text>
            <View className="w-[14px] h-[12px] bg-green-600"></View>
          </View>
          <View className="flex flex-row items-center gap-x-[5px]">
            <Text>Available</Text>
            <View className="w-[14px] h-[12px] bg-green-600"></View>
          </View>
          <View className="flex flex-row items-center gap-x-[5px]">
            <Text>Available</Text>
            <View className="w-[14px] h-[12px] bg-green-600"></View>
          </View>
        </View>

        <View className="items-center justify-center ">
          <CommonBtn
            customStyle={"bg-black w-[353px]"}
            childcustomStyle={"font-bold text-[14px]"}
            text={"Confirm"}
            onPress={openDrawer} 
          />
        </View>
        </View>
   
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      {/* <TouchableOpacity onPress={openDrawer} style={{ marginBottom: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 18 }}>Open Drawer</Text>
      </TouchableOpacity> */}

      {isVisible && (
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: drawerHeight,
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            transform: [{ translateY: startY }],
            zIndex: 100,
          }}
          {...panResponder.panHandlers} // Attach PanResponder to the drawer
        >
          <View className="justify-center flex-col items-center  pt-[20px]">
            {/* <Text style={{ fontSize: 18 }}>Drawer Content</Text> */}



<View className="bg-[#C0C0C0] w-[81px]  border-2 rounded-3xl border-[#C0C0C0]">
</View>


<View className=" w-[90vw] pt-[20px] gap-y-[5px] ">

  <Text className="font-[600] text-[16px] ">Wagon R</Text>
  <Text className="text-[12px] font-[500]">
  11;00 AM, Tue , 18 January
  </Text>
</View>

<View className=" border-t  border-[#C0C0C0] mt-[10px] pt-[10px]   w-full">



<View className="flex flex-row justify-between  px-[15px]">

<Text className="text-[16px] font-[700]">1 seat selected</Text>
<Text className="text-[16px] font-[700]">₹579.45</Text>

</View>

<View className="w-full items-center justify-center pt-[10px]">

<CommonBtn
            customStyle={"bg-black w-[353px]"}
            childcustomStyle={"font-bold text-[14px]"}
            text={"Select Boarding & Dropping Points"}
          />
          </View>
          </View>

</View>



        </Animated.View>
      )}
    </View>
      </ScrollView>



    </View>
  );
};

export default SelectSeats;
