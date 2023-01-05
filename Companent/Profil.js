import { View, Text , Image} from 'react-native'
import React from 'react'
import Styles from './Styles';


const Profil = () => {





  return (
    <View>
    <View style={Styles.div1} >
    <Image style={Styles.img5} source={{
            uri: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/540.jpg",
        }} />
    </View>

  <View style={Styles.div1}>
  <Text style={Styles.text1}> Ramazanzade Nizam</Text>
    
    <Text> From Lankaran</Text>
    <Text>mail:ramazanov5677890@gmail.com</Text>
    <Text> tel:567845678</Text>
  </View>
    </View>
  )
}

export default Profil