import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'

const CommonBtn = ({customStyle,childcustomStyle,text,onPress}) => {

  // function tripSelectHandler(bool = true) {
  //   console.log("hello");

  // }

  return (
<View className="">

<TouchableOpacity className={`flex items-center justify-center '''' w-[140px] h-[56px] rounded-[10px] ${customStyle}`}
  onPress={onPress}
>
<Text className={`text-white '''  ${childcustomStyle}`}>{text}</Text>
</TouchableOpacity>
</View>
  )
}

export default CommonBtn