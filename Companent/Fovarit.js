import { View, Text , Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import Styles from './Styles';
import { Instance } from "./Api";

const Fovarit = ({route}) => {
 
    const [fovarit, setfav] = useState({});
    const { id } = route.params;
    const {avatar, name, price } = fovarit;
    useEffect(() => {

        Instance.get(`users/${id}`)
            .then(res => setfav(res.data));
    }, [id]);


    // const {avatar } = route.params
    // const { name} = route.params
    // const { price} = route.params






  return (
    <View>

<View style={Styles.div6}>
<View>
<Image style={Styles.img6} source={{
            uri: avatar,
        }} />
</View>

<View>
    <Text style={Styles.text2}>{name}</Text>
    <Text style={Styles.text3}>{price}</Text>
</View>
</View>
    </View>
  )
}

export default Fovarit