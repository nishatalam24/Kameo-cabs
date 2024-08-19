import * as React from 'react';
import {View}  from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function Settings({customStyle}) {
  return (
    <View className={customStyle}>

<Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M14.9249 9.49498C14.8047 9.35812 14.7384 9.18216 14.7384 8.99998C14.7384 8.8178 14.8047 8.64185 14.9249 8.50498L15.8849 7.42498C15.9907 7.30698 16.0564 7.15851 16.0726 7.00086C16.0887 6.84322 16.0546 6.6845 15.9749 6.54748L14.4749 3.95248C14.3961 3.81562 14.2761 3.70714 14.132 3.6425C13.9879 3.57785 13.8271 3.56035 13.6724 3.59248L12.2624 3.87748C12.083 3.91455 11.8962 3.88467 11.7373 3.79348C11.5784 3.70229 11.4584 3.55609 11.3999 3.38248L10.9424 2.00998C10.8921 1.86102 10.7962 1.73163 10.6684 1.64011C10.5405 1.5486 10.3872 1.49958 10.2299 1.49998H7.22992C7.06637 1.49145 6.90452 1.53668 6.7691 1.62877C6.63367 1.72086 6.53211 1.85475 6.47992 2.00998L6.05992 3.38248C6.00142 3.55609 5.8814 3.70229 5.72251 3.79348C5.56361 3.88467 5.37684 3.91455 5.19742 3.87748L3.74992 3.59248C3.60334 3.57177 3.4539 3.5949 3.32043 3.65896C3.18697 3.72303 3.07545 3.82515 2.99992 3.95248L1.49992 6.54748C1.41829 6.68297 1.38159 6.8408 1.39506 6.9984C1.40853 7.156 1.47148 7.30531 1.57492 7.42498L2.52742 8.50498C2.64766 8.64185 2.71397 8.8178 2.71397 8.99998C2.71397 9.18216 2.64766 9.35812 2.52742 9.49498L1.57492 10.575C1.47148 10.6947 1.40853 10.844 1.39506 11.0016C1.38159 11.1592 1.41829 11.317 1.49992 11.4525L2.99992 14.0475C3.07875 14.1843 3.19876 14.2928 3.34286 14.3575C3.48696 14.4221 3.64779 14.4396 3.80242 14.4075L5.21242 14.1225C5.39183 14.0854 5.57861 14.1153 5.73751 14.2065C5.8964 14.2977 6.01642 14.4439 6.07492 14.6175L6.53242 15.99C6.58461 16.1452 6.68617 16.2791 6.8216 16.3712C6.95702 16.4633 7.11887 16.5085 7.28242 16.5H10.2824C10.4397 16.5004 10.593 16.4514 10.7209 16.3599C10.8487 16.2683 10.9446 16.1389 10.9949 15.99L11.4524 14.6175C11.5109 14.4439 11.6309 14.2977 11.7898 14.2065C11.9487 14.1153 12.1355 14.0854 12.3149 14.1225L13.7249 14.4075C13.8796 14.4396 14.0404 14.4221 14.1845 14.3575C14.3286 14.2928 14.4486 14.1843 14.5274 14.0475L16.0274 11.4525C16.1071 11.3155 16.1412 11.1567 16.1251 10.9991C16.1089 10.8415 16.0432 10.693 15.9374 10.575L14.9249 9.49498ZM13.8074 10.5L14.4074 11.175L13.4474 12.84L12.5624 12.66C12.0223 12.5496 11.4604 12.6413 10.9834 12.9178C10.5064 13.1943 10.1475 13.6364 9.97492 14.16L9.68992 15H7.76992L7.49992 14.145C7.32731 13.6214 6.96846 13.1793 6.49148 12.9028C6.01449 12.6263 5.45259 12.5346 4.91242 12.645L4.02742 12.825L3.05242 11.1675L3.65242 10.4925C4.02139 10.08 4.22537 9.54593 4.22537 8.99248C4.22537 8.43903 4.02139 7.905 3.65242 7.49248L3.05242 6.81748L4.01242 5.16748L4.89742 5.34748C5.43759 5.4579 5.99949 5.36614 6.47648 5.08963C6.95346 4.81312 7.31231 4.3711 7.48492 3.84748L7.76992 2.99998H9.68992L9.97492 3.85498C10.1475 4.3786 10.5064 4.82062 10.9834 5.09713C11.4604 5.37364 12.0223 5.4654 12.5624 5.35498L13.4474 5.17498L14.4074 6.83998L13.8074 7.51498C13.4426 7.92655 13.2412 8.45749 13.2412 9.00748C13.2412 9.55747 13.4426 10.0884 13.8074 10.5ZM8.72992 5.99998C8.13658 5.99998 7.55656 6.17593 7.06321 6.50557C6.56986 6.83522 6.18535 7.30375 5.95828 7.85193C5.73122 8.40011 5.67181 9.00331 5.78757 9.58525C5.90332 10.1672 6.18904 10.7017 6.6086 11.1213C7.02816 11.5409 7.56271 11.8266 8.14465 11.9423C8.72659 12.0581 9.32979 11.9987 9.87797 11.7716C10.4262 11.5446 10.8947 11.16 11.2243 10.6667C11.554 10.1733 11.7299 9.59333 11.7299 8.99998C11.7299 8.20433 11.4139 7.44127 10.8512 6.87866C10.2886 6.31605 9.52557 5.99998 8.72992 5.99998ZM8.72992 10.5C8.43325 10.5 8.14324 10.412 7.89657 10.2472C7.64989 10.0824 7.45763 9.8481 7.3441 9.57401C7.23057 9.29992 7.20087 8.99832 7.25874 8.70735C7.31662 8.41638 7.45948 8.1491 7.66926 7.93932C7.87904 7.72954 8.14632 7.58668 8.43729 7.5288C8.72826 7.47093 9.02986 7.50063 9.30395 7.61416C9.57804 7.72769 9.8123 7.91995 9.97713 8.16663C10.1419 8.4133 10.2299 8.70331 10.2299 8.99998C10.2299 9.39781 10.0719 9.77934 9.79058 10.0606C9.50928 10.3419 9.12775 10.5 8.72992 10.5Z" fill="black"/>
</Svg>
</View>

  );
}
