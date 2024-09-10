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
// import React from 'react'
import SearchCabs from '../core/SearchCabs'
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Logo from "../../icons/Logo";
import ProfileImage from "../common/ProfileImage";
import Search from "../../icons/Search";
import { Provider, useDispatch, useSelector } from 'react-redux';
import Bottombar from "../common/Bottombar";
import CabScheduleList from "../core/CabScheduleList";
const NavigationDrawer = () => {
    const bottomPosition = useRef(new Animated.Value(0)).current;
    const Drawer = createDrawerNavigator();
    const [displayhid, setDisplayhid] = useState("flex");

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
    

  return (
    <Drawer.Navigator
    initialRouteName="BottomBa"
    screenOptions={({ navigation }) => ({
      header: () => (
        <Animated.View
        style={[{ bottom: bottomPosition }, { display: displayhid }]}
        >
          <View className="flex   flex-row items-center px-[10px] h-[60px] absolute  bg-white " style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}  >
              <Ionicons name="menu" size={27} color="black" />
            </TouchableOpacity>

            <View className="flex flex-row justify-between items-center w-[90vw] px-[10px]">

<Logo/>

              <TouchableOpacity
                onPress={() => alert("Profile clicked")}
              >
                <ProfileImage
                  width={40}
                  height={40}
                  style={{ borderRadius: 20 }} 
                />

              </TouchableOpacity>



            </View>

          </View>
        </Animated.View>
      ),
      drawerStyle: {
        backgroundColor: "#f0f0f0", 
      },
      drawerActiveTintColor: "gray", 
      drawerInactiveTintColor: "black", 
    })}
    
  >



<Drawer.Screen
  name="BottomBar"
  component={Bottombar}
  options={{
    drawerIcon: ({ color, size }) => {
      return <Search customStyle={"left-[10px]"} />;
    },
    drawerLabel: () => null, // This hides the label from the drawer list
    drawerItemStyle: { display: 'none' }, // This hides the item entirely
  }}
/>


  </Drawer.Navigator>
  )
}

export default NavigationDrawer


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
    navbar: {
      height: 60, // Example height
      backgroundColor: '#fff', // Background color of the navbar
      justifyContent: 'center',
      alignItems: 'center',
      // Shadow for iOS
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 }, // Offset x: 0, y: 2
      shadowOpacity: 0.2, // Shadow opacity
      shadowRadius: 3, // Shadow blur radius
      // Elevation for Android
      elevation: 5,
    },
  
    text: {
      fontSize: 16,
      color: "#333",
    },
  });
  