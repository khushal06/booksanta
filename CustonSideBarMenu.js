import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import {DrawerItems  } from "react-navigation-drawer"

export default class CustomSideBarMenu extends React.Component {
  render(){
  return (
    
    <View style={styles.container}>
  <DrawerItems
  {...this.props}
  
  
  
  
  />

    
    </View>

  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width : 5000
  }
})
