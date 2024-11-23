import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import MasonryList from '@react-native-seoul/masonry-list';

export default function Loading(props) {
    return(
        <View className="flex-1 flex justify-center items-center">
            <ActivityIndicator {...props}/>
        </View>
    )
}