import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import Styles from './Styles';
import HomeCard from './HomeCard';
import HomeDetail from './HomeDetail';
import Fovarit from './Fovarit';
import { HomeOutlined, UserOutlined  , HeartOutlined, GiftOutlined } from '@ant-design/icons';
import HomeCard2 from './HomeCard2';



const Home = ({navigation}) => {



    const Home =()=>{
        navigation.navigate('Home',{

        })
    }



    const Favarit =()=>{
        navigation.navigate('Fovarit',{

        })
    }




    const Profil =()=>{
        navigation.navigate('Profil',{

        })
    }



    const Basket =()=>{
        navigation.navigate('Basket',{

        })
    }



const Add1=()=>{
    navigation.navigate('HomeCard2',{

    })
}



const Add2=()=>{
    navigation.navigate('HomeCard3',{

    })
}

const Add3=()=>{
    navigation.navigate('HomeCard4',{

    })
}

const Add4=()=>{
    navigation.navigate('HomeCard5',{

    })
}
    return (
        <View>
            <TextInput style={Styles.input}
                placeholder="Search" />


            <Text style={Styles.hometext} >Order online collect in store</Text>
            <View style={Styles.homeview}>


                <TouchableOpacity onPress={()=>Add1()}>Wearable </TouchableOpacity>
                <TouchableOpacity onPress={()=>Add2()}><Text>Laoptops</Text></TouchableOpacity>

                <TouchableOpacity onPress={()=>Add3()}><Text>Phons</Text></TouchableOpacity>

                <TouchableOpacity onPress={()=>Add4()}><Text>Drons</Text></TouchableOpacity>
            </View>

            <HomeCard navigation={navigation}  ></HomeCard>
{/* <HomeCard2 navigation={navigation} ></HomeCard2> */}



<View style={{flexDirection:'row', justifyContent:'space-between', paddingTop:100 , margin:15}}>

<Pressable style={{fontSize:40}} onPress={()=>Home()}><HomeOutlined /></Pressable>
<Pressable style={{fontSize:40}} onPress={()=>Favarit()}><HeartOutlined /></Pressable>
<Pressable style={{fontSize:40}} onPress={()=>Profil()}><UserOutlined /> </Pressable>
<Pressable style={{fontSize:40}} onPress={()=>Basket()}><GiftOutlined /></Pressable>

</View>


        </View>
    )
}

export default Home