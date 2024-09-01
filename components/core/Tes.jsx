import { View, Text ,Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Tes = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Tes</Text>
      <Button
        title="Go to Child Screen 2"
        onPress={() => navigation.navigate('ChildScreen2')}
      />
    </View>
  )
}

export default Tes