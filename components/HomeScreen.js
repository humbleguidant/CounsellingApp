/*
Author: Aubrey Nickerson
Date: July 5th, 2020
Program: HomeScreen.js
Project: Counselling App

This is the home screen. It is where the user
is redirected to when they have successfully 
logged in. They can choose which menu option 
that is offered and will be redirected to that 
screen.
*/

import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'galio-framework';

export default class HomeScreen extends Component{
    render(){
        // Display content. 
        return (
            <View style={styles.container}>
              <ScrollView>
              <Button
                color="#50C7C7"
                round
                style={{marginTop: 150, marginBottom: 10}} 
                onPress={() => {
                  this.props.navigation.navigate('Assertiveness')
                }}
              >Assertiveness</Button>
              <Button
                color="#50C7C7"
                round
                style={styles.buttonContainer} 
                onPress={() => {
                  this.props.navigation.navigate('BalancingEmotionalLogicalThought')
                }}
              >Balancing Emotional & Logical Thought</Button>
              <Button
                color="#50C7C7"
                round
                style={styles.buttonContainer} 
                onPress={() => {
                  this.props.navigation.navigate('BodyScan')
                }}
              >Body Scan</Button>
              <Button
                color="#50C7C7"
                round
                style={styles.buttonContainer} 
                onPress={() => {
                  this.props.navigation.navigate('ChallengingNegativeThoughts')
                }}
              >Challenging Negative Thoughts</Button>
              <Button
                color="#50C7C7"
                round
                style={styles.buttonContainer} 
                onPress={() => {
                  this.props.navigation.navigate('CheckIn')
                }}
              >Check In</Button>
              <Button
                color="#50C7C7"
                round
                style={styles.buttonContainer} 
                onPress={() => {
                  this.props.navigation.navigate('HealthyRelationships')
                }}
              >Healthy Relationships</Button>
              <Button
                color="#50C7C7"
                round
                style={styles.buttonContainer} 
                onPress={() => {
                  this.props.navigation.navigate('ManagingStress')
                }}
              >Managing Stress</Button>
              <Button
                color="#50C7C7"
                round
                style={{marginBottom: 150, marginTop: 10}} 
                onPress={() => {
                  this.props.navigation.navigate('FiveMinuteRule')
                }}
              >The 5 Minute Rule</Button>
              
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
      color: 'white'
    },
    buttonContainer: {
      marginTop: 10,
      marginBottom: 10
    }
});
