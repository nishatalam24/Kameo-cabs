import React, { useRef ,useEffect,useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Button,
  ScrollView
} from "react-native";
import Navigationdrawer from "./components/common/Navigationdrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Logo from "./icons/Logo";
import Test from "./icons/Test";
import Svg, { Path } from "react-native-svg";
import ProfileImage from "./components/common/ProfileImage";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Auth from "./icons/Auth";
import Search from "./icons/Search";
import OffersCompo from "./components/core/OffersCompo";
import Helps from "./icons/Helps";
import Offers from "./icons/Offers";
import Aboutus from "./icons/Aboutus";
import Settings from "./icons/Settings";
import SearchCabs from "./components/core/SearchCabs";
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer/index';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { setNavTruthy } from "./slice/navSlice";
import Backicon from "./icons/Backicon";
const Drawer = createDrawerNavigator();

 function AppNavigator() {
  const bottomPosition = useRef(new Animated.Value(0)).current; // Initial bottom position
  // const displayhid = useRef(new Animated.Value("flex")).current; // Initial bottom position

  const handlePress = () => {
    Animated.timing(bottomPosition, {
      toValue: 400, // Target bottom position (100px)
      duration: 100, // Duration of the transition in ms
      useNativeDriver: false,
    }).start();
  };



  const handlePress2 = () => {
    Animated.timing(bottomPosition, {
      toValue: 0, // Target bottom position (100px)
      duration: 70, // Duration of the transition in ms
      useNativeDriver: false,
    }).start();
  };
  const { navTruthy } = useSelector((state) => state.navRed);

  let navi=navTruthy

  function navdisplaysetter(displaytype) {
    setTimeout(() => {
      setDisplayhid(displaytype);
    }, 0); // 1000ms = 1 second
  }
  

  useEffect(() => {
    setTimeout(() => {

      if (navi) {
      handlePress();
      console.log("prin")
      navdisplaysetter("none")
      }
      else{
        handlePress2();
        console.log(displayhid)
        navdisplaysetter("flex")
      }
      console.log("useEffect used");
    }); // Delay the execution slightly
  },[navTruthy]);

  const dispatch = useDispatch();

  // function handlepress() {
  //   if (navTruthy) {
  //     dispatch(setNavTruthy(false));
  //     console.log(navTruthy);
     


  //   } else {
  //     dispatch(setNavTruthy(true));
    

   
  //   }

  //   // dispatch(setNavTruthy(true))
  //   console.log(navTruthy);
  // }


  const [displayhid, setDisplayhid] = useState("flex");

  

  return (
    // <SafeAreaProvider className="bg-[#b02f2f]">
 <SafeAreaProvider > 
      <SafeAreaView style={{ flex: 1 }}>
   


  
        <NavigationContainer >

        {/* {navTruthy ? ( */}
        {/* <TouchableOpacity
          className="  z-[10] p-[10px] border   "
          onPress={() => handlePress3()}
        >
          <Backicon />
        </TouchableOpacity> */}
      {/* ) : (
        ""
      )} */}

          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={({ navigation }) => ({
              header: () => (
                <Animated.View
                style={[{ bottom: bottomPosition }, { display: displayhid }]}

                  // className="border"
                  // className="absolute bottom-[100px]"
                  className="bg-red-600"
                >
                  <View className="flex   flex-row items-center px-[10px] h-[60px] absolute border-b bg-white">
                    {/* Toggle button */}
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}  >
                      <Ionicons name="menu" size={27} color="black" />
                    </TouchableOpacity>

                    <View className="flex flex-row justify-between items-center w-[90vw] px-[10px]">
                      {/* Logo in the center */}

                      <Logo />

                      {/* Profile image on the right */}
                      <TouchableOpacity
                        onPress={() => alert("Profile clicked")}
                      >
                        <ProfileImage
                          width={40}
                          height={40}
                          style={{ borderRadius: 20 }} // Make it round if it's not already
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Animated.View>
              ),
              drawerStyle: {
                backgroundColor: "#f0f0f0", // Background color of the drawer
              },
              drawerActiveTintColor: "gray", // Color of the active item text
              drawerInactiveTintColor: "black", // Color of the inactive item text
            })}
            
          >
              {/* <Animated.View
                  style={[styles.textContainer, { bottom: bottomPosition }]}
                > */}


            <Drawer.Screen
              name="Sign in / Sign Up"
              component={Auth}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Auth customStyle={"left-[10px]"} />
                ),
              }}
              
            />

            <Drawer.Screen
              name="Search Cabs"
              component={SearchCabs}
              options={{
                drawerIcon: ({ color, size }) => {
                  return <Search customStyle={"left-[10px]"} />;
                },
              }}
            />


            <Drawer.Screen
              name="Offers"
              component={OffersCompo}
              options={{
                drawerIcon: ({ color, size }) => {
                  return <Offers customStyle={"left-[10px]"} />;
                },
              }}
            />

            <Drawer.Screen
              name="Helps"
              component={ProfileImage}
              options={{
                drawerIcon: ({ color, size }) => {
                  return <Helps customStyle={"left-[10px]"} />;
                },
              }}
            />

            <Drawer.Screen
              name="About Us"
              component={ProfileImage}
              options={{
                drawerIcon: ({ color, size }) => {
                  return <Aboutus customStyle={"left-[10px]"} />;
                },
              }}
            />

            <Drawer.Screen
              name="Settings"
              component={ProfileImage}
              options={{
                drawerIcon: ({ color, size }) => {
                  return <Settings customStyle={"left-[10px]"} />;
                },
              }}
            />


              {/* </Animated.View> */}
          </Drawer.Navigator>


        
        </NavigationContainer>
{/* 
        <Button title="Move Text" onPress={handlePress} />
        <Button title="Move Text 2" onPress={handlePress2} /> */}

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  // textContainer: {
  //   position: 'absolute',
  //   bottom: 0, // Initial bottom position
  //   backgroundColor: 'lightblue',
  //   padding: 20,
  //   borderRadius: 5,
  // },
  text: {
    fontSize: 16,
    color: "#333",
  },
});



export default function App() {
  const store = configureStore({
    reducer: rootReducer,
  });

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}