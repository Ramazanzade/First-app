import { View, Text ,Image, Pressable } from 'react-native'
import React ,{useState,useEffect} from 'react'
import Styles from './Styles'
import { DeleteOutlined,  } from '@ant-design/icons';
import { Instance } from "./Api";


const Basket = ({route}) => {

    const [counter, setCounter] = useState(1);
    // const [basket, setbasket] = useState({});
    // const { id } = route.params;
    // const {avatar, name, price } = basket;
    // useEffect(() => {

    //     Instance.get(`users/${id}`)
    //         .then(res => setbasket(res.data));
    // }, [id]);

      const {avatar } = route.params
    const { name} = route.params
    const { price} = route.params


    const Add=()=>{
        setCounter(counter + 1)    }
    const add=()=>{
        if(counter>0){
            setCounter(counter - 1)
        }    }



        const Delet=()=>{
            Instance.delete(`users/${id}`)
            .then(res => setbasket(res.data));
        }
  return (
    <View>
    

<View style={Styles.div7}>

<View>

<Image style={Styles.img7} source={{
            uri: avatar,
        }} />
</View>


<View>
<Text style={Styles.text2}>{name}</Text>
    <Text style={Styles.text3}>{price}</Text>

    <View>
    <Text>Quantity</Text>
  <View   style={Styles.div9}  >  <Pressable style={Styles.col1} onPress={()=>add()}>-</Pressable> <Text>{counter}</Text>
    <Pressable style={Styles.col1} onPress={()=>Add()}>+ </Pressable></View>
    </View>
</View>


<View>
    <Pressable onPress={()=>Delet()}><DeleteOutlined style={{fontSize:30}} /></Pressable>
</View>


</View>




<View style={Styles.div8}>
    <Text style={Styles.text2}> Total</Text>
    <Text style={Styles.text2}>$ {counter*price}</Text>
</View>

    </View>
  )
}

export default Basket