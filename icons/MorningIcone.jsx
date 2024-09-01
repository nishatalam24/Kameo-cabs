import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path, LinearGradient, Stop, Defs, ClipPath, Rect, G } from 'react-native-svg';

const MorningIcone = () => {
  return (
    <Svg width="21" height="14" viewBox="0 0 21 14" fill="none">
      <Defs>
        <ClipPath id="clip0">
          <Rect width="20.125" height="20.125" fill="white" transform="translate(0.433105 0.626099)" />
        </ClipPath>
        <LinearGradient id="paint0_linear" x1="8.29443" y1="6.87415" x2="12.6968" y2="14.5031" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FBBF24" />
          <Stop offset="0.5" stopColor="#FBBF24" />
          <Stop offset="1" stopColor="#F59E0B" />
        </LinearGradient>
      </Defs>
      <G clipPath="url(#clip0)">
        <Path
          d="M10.4956 15.0909C12.927 15.0909 14.8979 13.1199 14.8979 10.6886C14.8979 8.25725 12.927 6.28625 10.4956 6.28625C8.06426 6.28625 6.09326 8.25725 6.09326 10.6886C6.09326 13.1199 8.06426 15.0909 10.4956 15.0909Z"
          fill="url(#paint0_linear)"
        />
        <Path
          d="M10.4956 3.8595V1.255M10.4956 20.1222V17.5245M15.3286 5.85559L17.1675 4.01672M3.82373 17.3605L5.66943 15.5148M5.66943 5.85559L3.82373 4.01672M17.1675 17.3605L15.3218 15.5148M3.67334 10.6954H1.06201M19.9292 10.6954H17.3315"
          stroke="#FBBF24"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
}

export default MorningIcone;
