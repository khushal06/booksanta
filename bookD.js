import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';


export default class   BookDonate extends React.Component {
  render(){
  return (
    
    <View style={styles.container}>
    <TouchableOpacity  onPress ={()=>{

      this.props.navigation.navigate("Open Drawer")

    }}>

    <Text>
         Open Drawer
    </Text>  


    </TouchableOpacity>
    
    
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
