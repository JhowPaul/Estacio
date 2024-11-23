import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

export default function WelcomeScreen() {

    const ring1padding= useSharedValue(0);
    const ring2padding= useSharedValue(0);

    const navigation = useNavigation();
    useEffect(()=>{
        ring1padding.value = 0;
        ring2padding.value = 0;
        setTimeout(()=> ring1padding.value = withSpring (ring1padding.value+hp(5)), 100);
        setTimeout(()=> ring2padding.value = withSpring (ring2padding.value+hp(5.5)), 300);

        setTimeout(()=> navigation.navigate('Home'), 2500);
    },[])
    return(
        <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
            <StatusBar Style="light"/>

            {/*Imagem com a logo*/}
            <Animated.View className="bg-white/20 rounded-full "style={{padding: ring2padding}}>
                <Animated.View className="bg-white/20 rounded-full "style={{padding: ring1padding}}>
                    <Image source={require('../../assets/images/welcome.png')}
                        style={{width:hp(20), height:hp(20)}}/>
                </Animated.View>
            </Animated.View>

            {/*titulo e punchline*/}
            <View className="flex items-center spacy-y-2">
                <Text style={{fontSize:hp(7)}} className="font-bold text-white tracking-widest text-6xl">
                    Comida

                </Text>

                <Text style={{fontSize:hp(2)}} className="font-medium text-white tracking-widest text-lg">
                    
                    É muito bom
                </Text>

            </View>
        </View>
        
    )
}