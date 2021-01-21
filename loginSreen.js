import React from 'react';
import { StyleSheet, Text, Modal ,View , TextInput , TouchableOpacity, Alert ,Image } from 'react-native';
import db from '../config'
import firebase from 'firebase'
import LottieView from 'lottie-react-native'



export default class LoginSreen extends React.Component {
    constructor(){
        super();
        this.state = {
        emailId : "",
        password : "",
        Firstname : "",
        lastname : "",
        addriess : "",
        isModalvisible : false




       }
    }

    showModal = ()=>{
     
        return(
      <Modal
      animationType = "fade"
      visible = {this.state.isModalvisible}>
      <View>
      <Text style = {{
          fontSize : 30,
          marginLeft : 110,
        
        }}>
          Registration
        </Text>
      </View>
      <View style={styles.mycontainer}>
        
      <TextInput style={styles.formTextInput}
      placeholder = "Firstname"
      onChangeText = {(text)=> {
      this.setState({
        Firstname : text,
        
      })
      }}
      />
           
     <TextInput style={styles.formTextInput}
      placeholder = "Lastname"
      onChangeText = {(text)=> {
      this.setState({
        lastname : text,
        
      })
      }}
      />
 <TextInput style={styles.formTextInput}
      placeholder = "Addriess"
      onChangeText = {(text)=> {
      this.setState({
        addriess : text,
        
      })
      }}
      />

         <View>
         <TouchableOpacity onPress = {()=>{
           this.usersignup(this.state.emailId, this.state.password)
         }}>

          <Text style = {{
          fontSize : 20,
          marginLeft : 150,
        
        }}> Register </Text>
           
         </TouchableOpacity>


         <TouchableOpacity onPress = {()=>{
           this.setState({isModalvisible : false})
           
         }}>

          <Text style = {{
          fontSize : 20,
          marginLeft : 150,
        
        }}> Cancel </Text>
           
         </TouchableOpacity>

         </View>

       </View>

      </Modal> 
      


     


      

        )


    }

   userlogin=(emailId,password)=>{
     firebase.auth().signInWithEmailAndPassword(emailId,password)
     .then(()=>{
       this.props.navigation.navigate('Donate')
     })
    .catch((error)=>{
    var errorcode=error.code; 
    var errorMessage=error.message; 
    return Alert.alert(errorMessage)
    
      })
   }

   usersignup=(emailId,password)=>{
    firebase.auth().createUserWithEmailAndPassword(emailId,password)
    .then((response)=>{
        return Alert.alert('user has signed up')
    })
   .catch((error)=>{
   var errorcode=error.code; 
   var errorMessage=error.message; 
   return Alert.alert(errorMessage)
     })
  }


  render(){
  return (
    


   

    <View >
       <Image
       
       source = {require("../assets/bookGif.gif")}
       style = {{
         width : 300,
         height : 200,

       }}
       
       />

       <View>
      

        {this.showModal()}
       </View>
      <Text style={styles.mytext}>Book Santa </Text>     
      <View>
 
      <TextInput style={styles.formTextInput}
      placeholder = " plzEntertheGmail@gmail.com"
      keyboardType = "email-address"
      onChangeText = {(text)=> {
      this.setState({
        emailId : text

      })
      }}
      
      />


      
      <TextInput style={styles.formTextInput}
      placeholder = "Password"
      secureTextEntry = {true}
      onChangeText = {(text)=> {
      this.setState({
        password : text

      })
      }}
      
      />

     


      </View>
       <View>
       <TouchableOpacity onPress = {()=>{
           this.setState({
             isModalvisible : true ,
           })
       }}>
      <Text>  Sign Up </Text>
      </TouchableOpacity>


      <TouchableOpacity onPress = {()=>{
           this.userlogin(this.state.emailId,this.state.password)
       }}>
      <Text>  log in  </Text>
      </TouchableOpacity>

       </View>
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
  },
   mytext :{

    backgroundColor : "red",
    marginTop : 0,
    fontFamily : "verdana",
    fontSize : 25

   },

   inputBox:{
    width: 400,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20
  },
  mycontainer :{
  flex : 1,
  backgroundColor : "#555555",
  borderRadius : 3,
  margin : 5,

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
