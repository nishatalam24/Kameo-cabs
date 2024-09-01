import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const HomepageHelpcent = () => {
  // State to manage which items are expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle "Read More"/"Read Less" for a specific item
  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Function to get the first 25 words of an answer
  const getTruncatedText = (text) => {
    const words = text.split(' ');
    return words.slice(0, 25).join(' ') + (words.length > 25 ? '...' : '');
  };
  const Listitems=[
    {
        question:"How do I book a carpool ride?",
        answer:"If you have a change of plans, you can always cancel your carpool ride from the ‘Your rides’ section of our app. The sooner you cancel, the better. That way the driver has time to accept new passengers. The amount of your refund will depend on how far in advance you cancel. If you cancel more than 24 hours before departure, for example, you’ll receive a full refund, excluding the service fee.",
    },
    {
        question:"How do I book a carpool ride?",
        answer:"If you have a change of plans, you can always cancel your carpool ride from the ‘Your rides’ section of our app. The sooner you cancel, the better. That way the driver has time to accept new passengers. The amount of your refund will depend on how far in advance you cancel. If you cancel more than 24 hours before departure, for example, you’ll receive a full refund, excluding the service fee.",
    },
    {
        question:"How do I book a carpool ride?",
        answer:"If you have a change of plans, you can always cancel your carpool ride from the ‘Your rides’ section of our app. The sooner you cancel, the better. That way the driver has time to accept new passengers. The amount of your refund will depend on how far in advance you cancel. If you cancel more than 24 hours before departure, for example, you’ll receive a full refund, excluding the service fee.",
    },
    {
        question:"How do I book a carpool ride?",
        answer:"If you have a change of plans, you can always cancel your carpool ride from the ‘Your rides’ section of our app. The sooner you cancel, the better. That way the driver has time to accept new passengers. The amount of your refund will depend on how far in advance you cancel. If you cancel more than 24 hours before departure, for example, you’ll receive a full refund, excluding the service fee.",
    },
    {
        question:"How do I book a carpool ride?",
        answer:"If you have a change of plans, you can always cancel your carpool ride from the ‘Your rides’ section of our app. The sooner you cancel, the better. That way the driver has time to accept new passengers. The amount of your refund will depend on how far in advance you cancel. If you cancel more than 24 hours before departure, for example, you’ll receive a full refund, excluding the service fee.",
    },
    {
        question:"How do I book a carpool ride?",
        answer:"If you have a change of plans, you can always cancel your carpool ride from the ‘Your rides’ section of our app. The sooner you cancel, the better. That way the driver has time to accept new passengers. The amount of your refund will depend on how far in advance you cancel. If you cancel more than 24 hours before departure, for example, you’ll receive a full refund, excluding the service fee.",
    },
]
  return (
    <View className="px-[20px]">
      {Listitems.map((item, index) => (
        <View key={index} className="border-b border-[#C0C0C0] pb-[10px]">
          {/* Render the question */}
          <Text className="text-[#262628] font-[700] text-[18px]  py-[10px]">
            {item.question}
          </Text>
          
          {/* Render the answer with Read More/Read Less */}
<View className="">

          <Text className="font-[340]  text-[15px]  text-[#262628] leading-[20.46px]">
            {expandedIndex === index ? item.answer : getTruncatedText(item.answer)}
          </Text>
          </View>
          {/* Render the Read More/Read Less button */}
          <View className=" flex-row justify-end  ">

          <TouchableOpacity onPress={() => toggleReadMore(index)} className="px-[10px]">
            <Text className="text-[#826FFF]">
              {expandedIndex === index ? 'Read Less' : 'Read More'}
            </Text>
          </TouchableOpacity>

          </View>
        </View>
      ))}
    </View>
  );
};

export default HomepageHelpcent;
