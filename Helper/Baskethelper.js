import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Baskethelper = () => {
    set; async (basket) => {
        try {
            await AsyncStorage.setItem('favorites', JSON.stringify(basket))
        } catch (e) {
        
        }
    },
    get; async () => {

        let data = await AsyncStorage.getItem('basket')
        if (data != null)
            return JSON.parse(data);
        else
            return [];
    }
}

export default Baskethelper
