import * as React from 'react';
import {View}  from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function Offers({customStyle}) {
  return (
    <View className={customStyle}>
<Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
</View>

  );
}