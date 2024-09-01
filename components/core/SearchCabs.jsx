import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  FlatList,
  TextInput,
  ScrollView,
  Image,
  Button
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
import LineIcon from "../../icons/LineIcon";
import PersonIcon from "../../icons/PersonIcon";
import HomepageList from "../common/HomepageList";
import HomepageHelpcent from "../common/HomepageHelpcent";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'




const SearchCabs = () => {

  useEffect(() => {
    console.log("triptype has been updated to:", triptype);
    // Perform any other actions based on the updated triptype here
  });

  const navigation = useNavigation();
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
        toValue: 10, // Target bottom position (100px)
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
        toValue: 120, // Target bottom position (100px)
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

  const bottomPosition = useRef(new Animated.Value(10)).current; // Initial bottom position
  const paddingPosition = useRef(new Animated.Value(0)).current;
  // Animated.timing(bottomPosition, {
  //   toValue: 100, // Target bottom position (100px)
  //   duration: 100, // Duration of the transition in ms
  //   useNativeDriver: false,
  // }).start();
  console.log(bottomPosition);
  return (
    // <Stack.Navigator initialRouteName="ChildScreen1" >
    <View className="bg-white  ">
      <ScrollView className="">
        <View
          style={{ padding: 20 }}
          className="bg-  flex-col items-center  bg-white gap-y-[15px] top-[10px] pt-[80px]"
        >
          <View className="z-[10] absolute  top-[1.5vh]  right-[102%] ">
            {navTruthy ? (
              <TouchableOpacity className="  " onPress={() => handlepress()}>
                <Backicon />
              </TouchableOpacity>
            ) : (
              ""
            )}
          </View>

          <View className=" z-[10] top-[0vh]  absolute h-[1000px]">
            {navTruthy ? (
              triptype ? (
                <Text className="text-[25px] font-bold">Share Cab</Text>
              ) : (
                <Text className="text-[25px] font-bold">Full Cab</Text>
              )
            ) : null}
          </View>

          <View>
            <View className="flex flex-row gap-[10px] ">
              <View>
                {triptype ? (
                  <CommonBtn
                    customStyle={"bg-black "}
                    childcustomStyle={"font-bold text-[14px]"}
                    text={"share Cab"}
                  />
                ) : (
                  <CommonBtn
                    customStyle={"bg-[#F6F6F6] text-black "}
                    childcustomStyle={"font-bold text-[14px] text-black"}
                    text={"Share Cab"}
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
            <Animated.View style={{ bottom: bottomPosition }}>
              <View className="bg-white w-screen   px-[5%]  flex flex-col ">
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
                          // borderColor: "gray",
                          // borderBottomWidth: 1,
                          padding: 15,
                          // borderRadius: 5,
                          marginBottom: 10,
                        }}
                        onPress={() => handlepress()}
                        className="w-[80%] border-b border-[#E3E3E3]"
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
                          // borderColor: "gray",
                          borderBottomWidth: 1,
                          padding: 15,
                          // borderRadius: 5,
                          marginBottom: 10,
                        }}
                        onPress={() => handlepress()}
                        className="w-[90%] border-b border-[#E3E3E3]"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </Animated.View>
          </View>

          <View className="mt-[100px] items-center flex-row  w-screen justify-around  px-[20px]">
            <View className="flex flex-row items-center   justify-between w-[45%]">
              <CalenderPicker />
              <View>
                <Text className="font-[400]">Date of journey</Text>
                <Text className="font-[800] text-[16px]">Fri, 12 Jan</Text>
              </View>
            </View>

            <LineIcon />

            <View className="flex flex-row w-[10%]   justify-between">
              <PersonIcon />
              <Text className="text-[16px] font-[16px]">1</Text>
            </View>
          </View>


          <View className="py-[20px]  z-[10]">

            {/* {
navTruthy?(
            <CommonBtn
              customStyle={"bg-black text-black border h-[56px] w-[304px]"}
              childcustomStyle={"font-bold text-[14px]  border text-white"}
              text={"Done"}
              // onPress={() => setTriptype(true)}
            />):
            (
              <CommonBtn
              customStyle={"bg-black text-black border h-[56px] w-[304px]"}
              childcustomStyle={"font-bold text-[14px]  border text-white"}
              text={"Search"}
              // onPress={() => setTriptype(true)}
            />
            )

          } */}
 <Button
        title="Go to Child Screen 2"
        onPress={() => navigation.navigate('ChildScreen2')}
      />



          </View>


   

          <View className="bg-[#F6F6F6] w-screen    ">
            <View className="w-[90%]">
              <View className="py-[10px] px-[10px]">
                <Text className="font-[800] text-[16px]  leading-[21.82px]">
                  Cab Offers
                </Text>
              </View>

              <View className=" items-center flex flex-row justify-center  w-screen">
                <View className="flex flex-row justify-between items-center bg-[#326BFF] rounded-[16px] h-[153px] w-[90%]  ">
                  {/* left */}

                  <View className="pl-[20px] flex-col justify-between gap-y-[40px]">
                    <Text className="text-white font-[700] text-[16px]">
                      Start 2024 with{"\n"}Kameo Intercity
                    </Text>
                    <Text className="font-[400] text-[12px] text-white">
                      Explore more
                    </Text>
                  </View>

                  {/* right */}
                  <View className=" ">
                    <Image
                      source={require("../../assets/manDriving.jpeg")}
                      // style={{ width: 200, height: 200 }}
                      className="h-[153px] w-[152px]  rounded-[16px]"
                    />
                  </View>
                </View>
              </View>
            </View>

            <View className="py-[40px]">
              <HomepageList />
            </View>


            {/* <View className="w-screen px-[10px]"> */}

<Text className="font-[700] py-[10px] text-[26px] text-[#262628] px-[20px]">
Carpool Help Centre
</Text>

<View>
  <HomepageHelpcent/>
</View>


{/* </View> */}

            <View
            
            
            ></View>




          </View>


<View>
<CommonBtn
                    customStyle={"bg-[#262628] text-white w-[248px]"}
                    childcustomStyle={"font-bold text-[14px] text-white  "}
                    text={"Read our Help Centre"}
                    onPress={() => setTriptype(true)}
                  />
</View>

        </View>

    
      </ScrollView>

      <View className="absolute top-[29vh] pl-[5%]">
        {navTruthy ? (
          <View>
            <FlatList
              data={filteredData}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <View className="flex flex-row items-center justify-center gap-x-[1%]">
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
                        padding: 10,
                        // borderBottomColor: "black",
                        // borderBottomWidth: 1,
                      }}
                      className=" "
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
    </View>
    // </Stack.Navigator>
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
