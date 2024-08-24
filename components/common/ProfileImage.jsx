
import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import icons from "../../assets/portrait.png"
const ProfileImage = () => {
  return (
    <View style={styles.container} className="bg-white h-full" >
    <Image source={icons} className="object-contain" style={styles.image} />
  </View>
  )
}

export default ProfileImage


const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Center the image horizontally
    justifyContent: 'center', // Center the image vertically
   
  },
  image: {
    width: 40, // Set width of the image
    height: 40, // Set height of the image
    borderRadius: 50, // Make it circular
    borderWidth:1, // Optional: Border width
    // backgroundColor:'white',
    borderColor: '#ddd', // Optional: Border color
    // objectFit:'fill'
  },
});