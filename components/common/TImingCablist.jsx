import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React,{useState} from 'react'
import MorningIcone from '../../icons/MorningIcone'
import AfterNoonIcon from '../../icons/AfterNoonIcon';
import Evening from '../../icons/EveningIcon'
const TImingCablist = () => {


    const [activeButton, setActiveButton] = useState(1);

    const handleButtonPress = (buttonNumber) => {
      setActiveButton(buttonNumber);
    };
  return (
    <View className="flex flex-row justify-center  bg-white rounded-b-lg py-[20px] ">

<View className="border flex-row border-[#F3F2F8] w rounded-[10px]">

    <TouchableOpacity
      style={[
        styles.button,
        activeButton === 1 ? styles.activeButton : styles.inactiveButton,
      ]}
      onPress={() => handleButtonPress(1)}
      className="w-[110px] h-[49px] flex flex-row items-center  rounded-[10px]"
    >


<View
 className=" w-[103px] flex flex-col items-start gap-y-[2px]"
 >

  <View className="flex flex-row gap-x-[5px] items-center gap-y-[5px]">
  <MorningIcone/>
  <View>

<Text className="text-[12px] font-[600] text-[#262628]">Morning</Text>
</View>

  </View>

<View className=" ">

  <Text className="text-[12px] font-[600] text-[#828282]">06:00 to 12:00</Text>
  </View>


</View>
    </TouchableOpacity>

    <TouchableOpacity
      style={[
        styles.button,
        activeButton === 2 ? styles.activeButton : styles.inactiveButton,
      ]}
      onPress={() => handleButtonPress(2)}
      className="w-[110px] h-[49px] flex flex-row items-center  rounded-[10px]"
      // className="w-[103px] h-[49px] flex items-center justify-center rounded-[10px]"
    >
     
<View
 className=" w-[103px] flex flex-col items-start gap-y-[2px]"
 >

  <View className="flex flex-row gap-x-[5px] items-center gap-y-[5px]">
  <AfterNoonIcon/>
  <View>

<Text className="text-[12px] font-[600] text-[#262628]">Afternoon</Text>
</View>

  </View>
  

<View className=" ">

<Text className="text-[12px] font-[600] text-[#828282]">06:00 to 12:00</Text>
  </View>


</View>
    </TouchableOpacity>

    <TouchableOpacity
      style={[
        styles.button,
        activeButton === 3 ? styles.activeButton : styles.inactiveButton,
      ]}
      onPress={() => handleButtonPress(3)}
      className="w-[110px] h-[49px] flex flex-row items-center  rounded-[10px]"
      // className="w-[103px] h-[49px] flex items-center justify-center rounded-[10px]"
    >
  
<View
 className=" w-[103px] flex flex-col items-start gap-y-[2px]"
 >

  <View className="flex flex-row gap-x-[5px] items-center gap-y-[5px]">
    <Evening/>
  <View>

<Text className="text-[12px] font-[600] text-[#262628]">Evening</Text>
</View>

  </View>

<View className=" ">

<Text className="text-[12px] font-[600] text-[#828282]">06:00 to 12:00</Text>
  </View>


</View>
    </TouchableOpacity>

</View>


  </View>
  )
}

export default TImingCablist

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 50,
    },
    button: {
      padding: 10,
      borderRadius: 5,
    },
    activeButton: {
      backgroundColor: '#F3F2F8',
    },
    inactiveButton: {
      backgroundColor: 'white',
    },
    buttonText: {
      color: 'black',
    },
  });