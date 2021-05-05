import React, { Component } from 'react';
import { StyleSheet, Image, Alert, ScrollView, View} from 'react-native';
import { Button, Input } from 'galio-framework';
import Spinner from 'react-native-loading-spinner-overlay';
import { Base64 } from 'js-base64';
import '../db/InitialFirebase';
import firebase from 'firebase';
import 'firebase/firestore';


const db = firebase.firestore();
const getCollection = db.collection('users');
export default class LoginScreen extends Component{
    state = {
      username: '',
      password: '',
      spinner: false
    }
    async login(){
      this.setState({spinner: true});
      var decryptPassword;
      var getUsername = await getCollection.where('username', '==', this.state.username).get();
      if(this.state.username == '' && this.state.password == '')
      {
        this.setState({spinner: false});
        Alert.alert('Error', "You must sign in with your username and password. Create an account if you don't have one");
        return;
      }
      else if(this.state.username == '')
      {
        this.setState({spinner: false});
        Alert.alert('Username Error', 'You must fill in your username.');
        return;
      }
      else if(this.state.password == '')
      {
        this.setState({spinner: false});
        Alert.alert('Password Error', 'You must fill in your password');
        return;
      }
      else if(getUsername.empty)
      {
        this.setState({spinner: false});
        Alert.alert('Username Error', "This username does not exist as a member. Please create an account.");
        return;
      }
      getUsername.forEach(doc => {
        decryptPassword = Base64.decode(doc.data().password);
      });
      if(this.state.password != decryptPassword)
      {
        this.setState({spinner: false});
        Alert.alert('Password Error', 'The password you entered is incorrect. Try again.');
        return;
      }
      this.setState({spinner: false});
      this.props.navigation.navigate('Home');
    }

    render(){
        return (
            <View style={styles.container}>
            <ScrollView>
              <Spinner
                visible={this.state.spinner}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
              />
              <Image
                source={require('../assets/allgoodlogo.png')}
                style={styles.imageContainer}
              />
              <Input 
                name="username" 
                style={styles.textInputContainer} 
                placeholder="Username"
                onChangeText={(text) => {
                  this.setState({
                    username: text
                  })
                }}
              />
              <Input 
                name="password" 
                style={styles.textInputContainer} 
                placeholder="Password" 
                password viewPass
                onChangeText={(text) => {
                  this.setState({
                    password: text
                  })
                }}/>
              <Button
                color="#50C7C7"
                round size="small"
                style={styles.buttonContainer}
                onPress={() => {
                  this.login();
                }}
                >Sign In</Button>
              <Button
                color="#50C7C7"
                round size="small"
                style={styles.buttonContainer}
                onPress={() => {
                  this.props.navigation.navigate('ForgotPassword')
                }}
                >Forgot Password</Button> 
              <Button
                color="#50C7C7"
                round size="small"
                style={styles.buttonContainer}
                onPress={() => {
                  this.props.navigation.navigate('Register')
                }}
                >Create Account</Button>
            </ScrollView>
          </View>
            
          
        );
    }  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#B23AFC',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textContainer: {
      fontSize: 20,
      marginBottom: 20,
      color: 'white',
    },
    textInputContainer: {
        width: 350,
        marginBottom: 10,
        marginLeft: 20
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 90
    },
    imageContainer: {
        marginTop: 30,
        width: 400,
        height: 400,
    },
    spinnerTextStyle: {
        fontSize: 20
    }
});