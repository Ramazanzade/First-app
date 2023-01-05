import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Instance } from "./Api";
import Styles from './Styles';

const HomeCard3 = ({navigation}) => {
    const [user, setuser] = useState([]);
    useEffect(() => {

        Instance.get(`users`)
            .then(res => setuser(res.data));
    }, []);
    const Detail = (name, avatar,title, price) => {

        navigation.navigate('HomeDetail', {
            avatar:avatar,
             name: name,
             title:title,
            price:price,
           

        })
    }
    const renderItem = ({ item }) => {
        return <View style={Styles.view1}><Image style={Styles.img} source={{
            uri: item.avatar,
        }} /> <TouchableOpacity onPress={() => Detail( item.name, item.avatar, item.title, item.price)} ><Text style={Styles.name}>{item.name} </Text> <Text style={Styles.title}>{item.title}</Text> <Text style={Styles.price}>{item.price}</Text></TouchableOpacity> </View>

    }
    return (
        <SafeAreaView>
            <FlatList
                data={user}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}
export default HomeCard3