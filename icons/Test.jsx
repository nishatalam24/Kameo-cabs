import { View, Text } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'; 
const Test = ({base}) => {
  const StyledView = styled(View);
const StyledText = styled(Text);


console.log(base)
  return (
    <StyledView>
    <StyledText className={base}>tests</StyledText>
  </StyledView>
  )
}

export default Test