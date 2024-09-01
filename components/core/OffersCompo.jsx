import React, { useRef ,useEffect} from 'react';
import { View, Text, Button, Animated, StyleSheet,TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Tes from './Tes';
import Tes2 from './Tes2';
import SearchCabs from './SearchCabs';
const Stack = createStackNavigator();


const OffersComponent = () => {

 





  return (
    // <View className="border ">

    <Stack.Navigator initialRouteName="ChildScreen1" >
    <Stack.Screen name="ChildScreen1" component={SearchCabs}    options={{ headerShown: false }} />
    <Stack.Screen name="ChildScreen2" component={Tes2} 
      options={{ headerShown: false }} />
  </Stack.Navigator>
  // {/* </View> */}

  );
};

export default OffersComponent;



