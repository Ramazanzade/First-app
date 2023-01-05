import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStart from '../Companent/GetStart';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Companent/Home';
import HomeDetail from '../Companent/HomeDetail';
import HomeCard from '../Companent/HomeCard';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Fovarit from '../Companent/Fovarit';
import HomeCard2 from '../Companent/HomeCard2';
import HomeCard3 from '../Companent/HomeCard3';
import HomeCard4 from '../Companent/HomeCard4';
import HomeCard5 from '../Companent/HomeCard5';
import Profil from '../Companent/Profil';
import Basket from '../Companent/Basket';




const Stack = createNativeStackNavigator();

const Srack1 = () => {
  return (
 <NavigationContainer>
     <Stack.Navigator> 

<Stack.Screen name="GetStart" component={GetStart}/>  
<Stack.Screen name="Home" component={Home}>
</Stack.Screen>



<Stack.Screen name="HomeCard" component={HomeCard}/>

<Stack.Screen name="HomeCard2" component={HomeCard2}/>
<Stack.Screen name="HomeCard3" component={HomeCard3}/>
<Stack.Screen name="HomeCard4" component={HomeCard4}/>
<Stack.Screen name="HomeCard5" component={HomeCard5}/>

<Stack.Screen name="HomeDetail" component={HomeDetail}/>
<Stack.Screen name="Fovarit" component={Fovarit}/>
<Stack.Screen name="Profil" component={Profil}/>
<Stack.Screen name="Basket" component={Basket}/>


</Stack.Navigator>
 </NavigationContainer>
  )
}

export default Srack1