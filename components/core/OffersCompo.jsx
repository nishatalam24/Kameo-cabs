import React, { useRef ,useEffect} from 'react';
import { View, Text, Button, Animated, StyleSheet,TouchableOpacity } from 'react-native';


const OffersComponent = () => {
  const bottomPosition = useRef(new Animated.Value(0)).current; // Initial bottom position

 

  const handlePress = () => {
    Animated.timing(bottomPosition, {
      toValue: 100, // Target bottom position (100px)
      duration:50, // Duration of the transition in ms
      useNativeDriver: false,
    }).start();
  };



  const handlePress2 = () => {
    Animated.timing(bottomPosition, {
      toValue: 200, // Target bottom position (100px)
      duration: 50, // Duration of the transition in ms
      useNativeDriver: false,
    }).start();
  };


  // useEffect(() => {
  //   setTimeout(() => {
  //     handlePress();
  //     console.log("useEffect used");
  //   }, 400); // Delay the execution slightly
  // }, []);

  //   const { navTruthy } = useSelector((state) => state.navRed);
  // const dispatch = useDispatch();
  return (
    <View style={styles.container} className="border top-[-10px] ">
      {/* Text Component that will move */}
      {/* <View className="bg-red-500 h-full w-full top-[-20px] "> */}

      <TouchableOpacity onPress={() => console.log("1")} className="absolute top-[10px]">
  <Text>hello</Text>
</TouchableOpacity>

      <Animated.View style={[styles.textContainer, { bottom: bottomPosition }]}>
        <Text style={styles.text}>I will move to bottom 100px</Text>
      </Animated.View>
      </View>

    // </View>
  );
};

export default OffersComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  // textContainer: {
  //   position: 'absolute',
  //   bottom: 0, // Initial bottom position
  //   backgroundColor: 'lightblue',
  //   padding: 20,
  //   borderRadius: 5,
  // },

  // textContainer2: {
  //   position: 'absolute',
  //   bottom: 40, // Initial bottom position
  //   backgroundColor: 'lightblue',
  //   padding: 20,
  //   borderRadius: 5,
  // },

  text: {
    fontSize: 16,
    color: '#333',
  },
});

