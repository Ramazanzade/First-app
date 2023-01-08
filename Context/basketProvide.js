import { View, Text } from 'react-native'
import React from 'react'
import { useState, createContext, useEffect } from 'react'
import Baskethelper from '../Helper/Baskethelper';


export const basketContext = createContext(null);












const basketProvide = ({children}) => {


    const { basket, setbasket } = useState([]);

    const values = {
        basket,
        setbasket
    }

    useEffect(() => {

        Baskethelper.get()
            .then(data => {
                setbasket(data);
            })

    }, [])

  return (
    <View>
 <basketContext.Provider value={values}>{children}</basketContext.Provider>    </View>
  )
}

export default basketProvide