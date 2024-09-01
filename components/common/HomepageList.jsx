import { View, Text } from 'react-native';
import React from 'react';
import TwopersonIcon from '../../icons/TwopersonIcone';
import PinpointlocIcon from '../../icons/PinpointLocationIcon';
import CustserveIcone from '../../icons/CustServeICon';

const ListItems = [
  {
    title: "Avoid Queues",
    para: "Book online in simple steps",
    component: TwopersonIcon
  },
  {
    title: "Track your bus",
    para: "Get live location of your cap before \n boarding",
    component: PinpointlocIcon
  },
  {
    title: "24*7 Customer Support",
    para: "Travel worry free with 24*7 customer \n support",
    component: CustserveIcone
  }
];

const HomepageList = () => {
  return (
    <View className="pl-[20px]">
      {ListItems.map((item, index) => (
        <View 
          key={index} 
          className="flex flex-row items-center  gap-[25px] mb-[20px]" // add margin-bottom for spacing between items
        >
          <View>
            <item.component />
          </View>

          <View className="flex flex-col  ">
            <Text className="font-[700] text-[18px] leading-8">{item.title}</Text>
            <Text className="font-[300]">{item.para}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default HomepageList;
