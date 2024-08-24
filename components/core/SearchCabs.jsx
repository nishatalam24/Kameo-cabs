import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Button,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import CommonBtn from "../common/CommonBtn";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setNavTruthy } from "../../slice/navSlice";
import SwitchLocatebtn from "../../icons/SwitchLocatebtn";
import Caricon from "../../icons/Caricon";
import Backicon from "../../icons/Backicon";
import LocationIcon from "../../icons/LocationIcon";
import CalenderPicker from "../common/CalenderPicker";

const SearchCabs = () => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const animatedValue = new Animated.Value(isEnabled ? 1 : 0);
  const [triptype, setTriptype] = useState(true);

  // const translateX = animatedValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, 20], // Change these values to adjust button movement
  // });

  function tripSelectHandler(truthy) {
    console.log("hello jee");
    setTriptype(truthy);
  }

  // useEffect(() => {
  //   console.log("triptype has been updated to:", triptype);
  //   // Perform any other actions based on the updated triptype here
  // }, [triptype]);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    console.log(date);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  // for filtering data and all
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Example data
  const data = ["Jaipur", "Gujarat", "Aligarh", "Delhi", "Mumbai", "Kolkata"];
  // Function to filter and sort data based on user input

  const handleSearch = (text) => {
    setQuery(text);

    // Filter, sort, and limit the results to the first 3
    const filtered = data
      .filter((location) => location.toLowerCase().includes(text.toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
      .slice(0, 3); // Limit to the first 3 results

    setFilteredData(filtered);
  };

  const handleLocationClick = (location) => {
    // Handle the location selection (e.g., update state or navigate)
    console.log("Selected location:", location);
  };

  const { navTruthy } = useSelector((state) => state.navRed);
  const dispatch = useDispatch();
  // dispatch(setToken(JSON.parse(token)));

  function handlepress() {
    if (navTruthy) {
      dispatch(setNavTruthy(false));
      console.log(navTruthy);
      Animated.timing(bottomPosition, {
        toValue: -100, // Target bottom position (100px)
        duration: 300, // Duration of the transition in ms
        useNativeDriver: false,
      }).start();

      Animated.timing(paddingPosition, {
        toValue: 400, // Target paddingTop value
        duration: 100, // Duration of the transition in ms
        useNativeDriver: false, // Same reason as above
      }).start();
    } else {
      dispatch(setNavTruthy(true));
      Animated.timing(bottomPosition, {
        toValue: 100, // Target bottom position (100px)
        duration: 200, // Duration of the transition in ms
        useNativeDriver: false,
      }).start();

      Animated.timing(paddingPosition, {
        toValue: 100, // Target paddingTop value
        duration: 400, // Duration of the transition in ms
        useNativeDriver: false, // Same reason as above
      }).start();
    }

    // dispatch(setNavTruthy(true))
    // console.log(navTruthy);
  }

  const bottomPosition = useRef(new Animated.Value(0)).current; // Initial bottom position
  const paddingPosition = useRef(new Animated.Value(0)).current;
  // Animated.timing(bottomPosition, {
  //   toValue: 100, // Target bottom position (100px)
  //   duration: 100, // Duration of the transition in ms
  //   useNativeDriver: false,
  // }).start();

  return (

    <ScrollView>

    <View
      style={{ padding: 20 }}
      className="bg-  flex-col items-center  bg-white gap-[10px] top-[50px]"
    >


      {navTruthy ? (
        <TouchableOpacity
          className=" z-[10]  top-[-20%]  right-[40%]  "
          onPress={() => handlepress()}
        >
          <Backicon />
        </TouchableOpacity>
      ) : (
        ""
      )}

      <View>
        <View className="flex flex-row gap-[10px] ">
          <View>
            {triptype ? (
              <CommonBtn
                customStyle={"bg-black "}
                childcustomStyle={"font-bold text-[14px]"}
                text={"Search Cab"}
              />
            ) : (
              <CommonBtn
                customStyle={"bg-[#F6F6F6] text-black "}
                childcustomStyle={"font-bold text-[14px] text-black"}
                text={"Search Cab"}
                onPress={() => setTriptype(true)}
              />
            )}
          </View>

          <View>
            {triptype ? (
              <CommonBtn
                customStyle={"bg-[#F6F6F6] text-black "}
                childcustomStyle={"font-bold text-[14px] text-black"}
                text={"Full Cab"}
                onPress={() => setTriptype(false)}
              />
            ) : (
              <CommonBtn
                customStyle={"bg-black  "}
                childcustomStyle={"font-bold text-[14px] "}
                text={"Full Cab"}
              />
            )}
          </View>
        </View>
      </View>



        <View>
       
      <Animated.View
            // style={{ bottom: bottomPosition }}
         
          >
<View    className="bg-white      w-screen   px-[5%]  flex flex-col ">


            <View className="flex flex-col top-[10%]   ">
          <View>
            <Text className="left-[12%]  top-[15%] text-[#949494]">
              From (Area, Street or Landmark)
            </Text>
            <View className="flex flex-row items-center gap-[5px]">
              <View className="right-[10%]">
                <Caricon />
              </View>

              <TextInput
                placeholder="Search location"
                value={query}
                onChangeText={handleSearch}
                style={{
                  borderColor: "gray",
                  borderBottomWidth: 1,
                  padding: 15,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() => handlepress()}
                className="w-[80%] border-[#E3E3E3]"
              />

              <SwitchLocatebtn />
            </View>
          </View>

          <View>
            <Text className="left-[12%]  top-[15%] text-[#949494]">
              From (Area, Street or Landmark)
            </Text>
            <View className="flex flex-row items-center">
              <View className="right-[10%]">
                <Caricon />
              </View>

              <TextInput
                placeholder="Search location"
                value={query}
                onChangeText={handleSearch}
                style={{
                  borderColor: "gray",
                  borderBottomWidth: 1,
                  padding: 15,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() => handlepress()}
                className="w-[90%] border-[#E3E3E3]"
              />
            </View>
          </View>

  
        </View>


</View>
          </Animated.View>




     {navTruthy ? (
          <View className="pl-[%] ">
            <FlatList
              data={filteredData}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <View className="flex flex-row items-center gap-x-[1%]">
                  <LocationIcon />
                  <TouchableOpacity
                    onPress={() => handleLocationClick(item)}
                    className="flex flex-row border-b w-[90%] ml-[100%] border-[#E3E3E3] "
                    // style={{
                    //   padding: 4,
                    //   borderBottomColor: "#ccc",
                    //   borderBottomWidth: 1,
                    // }}
                  >
                    <Text
                      style={{
                        padding: 4,
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                      }}
                      className="border-2 "
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              // style={shadow.container}
            />
          </View>
        ) : (
          ""
        )} 
      </View>
{/* 
      <View className="mt-[100px] top- border h-[100px]">
        <CalenderPicker />
        <Text>Hellow</Text>
      </View> */}

    </View>
    </ScrollView>

  );
};

export default SearchCabs;

const shadow = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    // iOS Shadow
    shadowColor: "rgba(0, 0, 0, 0.7)", // Darker shadow color
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7, // Higher opacity for a darker shadow
    shadowRadius: 15,
    // Android Shadow
    elevation: 20, // Higher elevation for a more prominent shadow on Android
  },
});
