import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import Navigationdrawer from './components/common/Navigationdrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Logo from "./icons/Logo"
import Test from './icons/Test';
import Svg, { Path } from 'react-native-svg';
import ProfileImage from './components/common/ProfileImage';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Auth from './icons/Auth';
import Search from './icons/Search';
import Offers from './icons/Offers';
import Helps from './icons/Helps';
import Aboutus from './icons/Aboutus';
import Settings from './icons/Settings';
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>

      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation }) => ({
          header: () => (
            <View className="flex flex-row items-center px-[10px] h-[60px] bg-white">


              {/* Toggle button */}
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Ionicons name="menu" size={27} color="black" />
              </TouchableOpacity>

              <View className="flex flex-row justify-between items-center w-[90vw] px-[10px]" >
              {/* Logo in the center */}

              <Logo  />


          

              {/* Profile image on the right */}
              <TouchableOpacity onPress={() => alert('Profile clicked')}>
                <ProfileImage
                  width={40}
                  height={40}
                  style={{ borderRadius: 20 }} // Make it round if it's not already
                />
              </TouchableOpacity>

              </View>

            </View>
          ),
          drawerStyle: {
            backgroundColor: '#f0f0f0', // Background color of the drawer
          },
          drawerActiveTintColor: 'gray', // Color of the active item text
          drawerInactiveTintColor: 'black', // Color of the inactive item text
        })}
      >

     



<Drawer.Screen name="Sign in / Sign Up" component={ProfileImage}
       options={{
                    drawerIcon: ({ color, size }) => (
                      <Auth customStyle={"left-[10px]"}/>
                    ),
                  }}/>
<Drawer.Screen name="Search Cabs" component={ProfileImage}
       options={{
                    drawerIcon: ({ color, size }) => {
           return (
             <Search customStyle={"left-[10px]"}/>
           );
         },
                  }}/>
     
<Drawer.Screen name="Offers" component={ProfileImage}
       options={{
                    drawerIcon: ({ color, size }) => {
           return (
             <Offers customStyle={"left-[10px]"}/>
           );
         },
                  }}/>

<Drawer.Screen name="Helps" component={ProfileImage}
       options={{
                    drawerIcon: ({ color, size }) => {
           return (
             <Helps customStyle={"left-[10px]"}/>
           );
         },
                  }}/>

<Drawer.Screen name="About Us" component={ProfileImage}
       options={{
                    drawerIcon: ({ color, size }) => {
           return (
             <Aboutus customStyle={"left-[10px]"}/>
           );
         },
                  }}/>
                  
<Drawer.Screen name="Settings" component={ProfileImage}
       options={{
                    drawerIcon: ({ color, size }) => {
           return (
             <Settings customStyle={"left-[10px]"}/>
           );
         },
                  }}/>
     
      </Drawer.Navigator>

    </NavigationContainer>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}