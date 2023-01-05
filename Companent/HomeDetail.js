import { View, Text,Image , Pressable, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import Styles from './Styles';
import { CheckCircleOutlined,  } from '@ant-design/icons';
import { Instance } from "./Api";


const HomeDetail = ({route, navigation}) => {

   


    const { name} = route.params  
    const { avatar } = route.params
    const { title } = route.params
    const { price} = route.params
    
    


    const Fav =(avatar, name, price)=>{
        
        navigation.navigate('Fovarit', {
            avatar:avatar,
             name: name,
            price:price,
           

        })
    }
    



    const Add =(avatar, name, price)=>{
        
        navigation.navigate('Basket', {
            avatar:avatar,
             name: name,
            price:price,
           

        })
    }


  return (
    <View>

<View style={Styles.det3} >
    <Pressable onPress={()=>Fav( avatar, name , price)}><CheckCircleOutlined style={{fontSize:30}}/></Pressable>
</View>



<View style={Styles.det}>
<Image style={Styles.img1} source={{
            uri: avatar,
        }} />
</View>


       <Text style={Styles.tex} > {name}</Text>
   
     

     

        <Text style={Styles.tex1}>Color</Text>

        <View style={Styles.deti}>
        <Pressable style={Styles.col1} >Blue</Pressable>
        <Pressable  style={Styles.col2}>Gold</Pressable>
        <Pressable  style={Styles.col3}>Green</Pressable>
     </View>




<View>
    <Text style={Styles.tex2}>Get Apple Tv+ free for a year</Text>
    <Text style={Styles.tex3}>{title}</Text>
</View>




<View style={Styles.det2}>
    <Text  style={Styles.tex4}>Total</Text>
    <Text style={Styles.tex5}>$ {price}</Text>
</View>






<TouchableOpacity style={Styles.pres1}  onPress={()=>Add(avatar , name , price)} ><Text>Add to basket</Text></TouchableOpacity>


    </View>
  )
}

export default HomeDetail