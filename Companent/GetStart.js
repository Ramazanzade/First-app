import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Styles from './Styles';
const image = { uri: "https://miro.medium.com/fit/c/224/224/1*ZBFb5xwrVCqbDJjGXwJP3g.png" };


const GetStart = ({navigation}) => {


    const Get = () => {
        navigation.navigate('Home')
    }


    return (
        <View style={Styles.container}>


            <ImageBackground source={image} resizeMode="cover" style={Styles.image}>
                <Text style={Styles.text}>Find your Gradeant</Text>
                <TouchableOpacity style={Styles.pres} onPress={() => Get()} ><Text>Get Start</Text></TouchableOpacity>
            </ImageBackground>




        </View>
    )
}




export default GetStart