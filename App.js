import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  LoginSreen from './screens/loginSreen';
import  {AppTabNavigator} from './components/Apptabnavigator';
import  {AppDrawerNavigator} from './components/AppDrawerNavigator';
import { createAppContainer , createSwitchNavigator } from "react-navigation";
import { createTabNavigator } from 'react-navigation-tabs';
import  BookRequest from './screens/bookR'
export default class App extends React.Component {
  render(){
  return (
    
    <View style={styles.container}>
      
     <AppContainer/>
      
    </View>

  );
  }
}
const switchNavigator = createSwitchNavigator({
 
  LoginSreen    :  {screen : LoginSreen  },
  Drawer : {screen : AppDrawerNavigator}



})

const AppContainer  = createAppContainer (switchNavigator)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
