import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import  BookDonate from '../screens/bookD'
import  BookRequest from '../screens/bookR'
import { createBottomTabNavigator }  from "react-navigation-tabs"


export const AppTabNavigator = createBottomTabNavigator({        
    Donate :  {screen : BookDonate ,
    
    navigationOptions : {
        tabBarIcon : 
        <Image
       
       source = {require("../assets/bookGif.gif")}
       style = {{
         width : 30,
         height : 20,

       }}
       
       />

     }
    
    },

    Request :  {screen : BookRequest },

})