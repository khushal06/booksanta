import React from 'react';
import { StyleSheet, Text, View  , TextInput , TouchableOpacity , KeyboardAvoidingView} from 'react-native';
import db from '../config'
import firebase from 'firebase'


export default class BookRequest extends React.Component {

  constructor(){
    super();
    this.state = {
    Bookname: "",
    reason : "",
 //   userId : firebase.auth().currentUser.email


   }
}

createuniqueID(){

return Math.random().toString(36).substring(7)



}



AddRequest = (Bookname , reason )=>{

  var userId = this.state.userId
 var randomRequestId = this.createuniqueID()
 db.collection('requestedBooks').add({
   "userId"  :  userId,
   "Bookname" : Bookname ,
   "reason" : reason

 })

}





  render(){
  return (
    
    <View style={styles.container}>
       
      <KeyboardAvoidingView>

     <Text> Book Request</Text>
       
      
      <TextInput style={styles.formTextInput}
      placeholder = " Bookname"
      
      onChangeText = {(text)=> {
      this.setState({
        Bookname : text

      })
      }}
      value = {this.state.Bookname}
      />


      
      <TextInput style ={[styles.formTextInput,{height:200}]}
      placeholder = "Plz type your Reason"
      multiline
      numberOfLines = {5}
      onChangeText = {(text)=> {
      this.setState({
        reason : text

      })
      }}
      value = {this.state.reason}
      />
 

        <TouchableOpacity onPress = {()=>{
           this.AddRequest(this.state.Bookname , this.state.reason )

         }}>
      <Text>  Request </Text>
      </TouchableOpacity>











 
      </KeyboardAvoidingView>
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
    width : 500

    
  },

  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  }
})
