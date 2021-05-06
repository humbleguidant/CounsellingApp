/*
Author: Aubrey Nickerson
Date: July 4th, 2020
Program: CheckInScreen.js
Project: Counselling App

This is the check in screen. It contains
a stack of cards where the user swipes left or right. Each card
gives tips on how the user can take deep breaths and reduce stress.
*/

// Import libraries
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'; 
import { Button, Block, DeckSwiper, Text } from 'galio-framework';

export default class CheckInScreen extends Component{
    
    // Create deck of cards
    deckSwiperElements(){
        var elements = [
            <View style={{ backgroundColor: '#D90754', height: 750, width: 375, alignItems: 'center', justifyContent: 'center', marginTop: 50, marginLeft: -30}}>
                <Text h1 style={{fontFamily: 'serif'}}>Take a deep breath.</Text>
                <Text h3 style={{fontFamily: 'serif', marginBottom: 170}}>(Swipe left or right)</Text>
            </View>,
            <View style={{ backgroundColor: '#75E6CF', height: 750, width: 375, alignItems: 'center', justifyContent: 'center', marginTop: 50, marginLeft: -30}}>
                <Text style={{fontFamily: 'serif', fontSize: 50, marginBottom: 170}}>Notice any thoughts, feelings, and impulses.</Text>
            </View>,
            <View style={{ backgroundColor: '#1CBDFC', height: 750, width: 375, alignItems: 'center', justifyContent: 'center', marginTop: 50, marginLeft: -30}}>
                <Text style={{fontFamily: 'serif', fontSize: 50, marginBottom: 170}}>Take another deep breath to consider what is going on around you including interactions with others.</Text>
            </View>,
            <View style={{ backgroundColor: '#FF9C09', height: 750, width: 375, alignItems: 'center', justifyContent: 'center', marginTop: 50, marginLeft: -30}}>
                <Text style={{fontFamily: 'serif', fontSize: 50, marginBottom: 170}}>Once you consider both of these things, you can decide what you want to do and say.</Text>
            </View>,
            <View style={{ backgroundColor: '#EA4C89', height: 750, width: 375, alignItems: 'center', justifyContent: 'center', marginTop: 50, marginLeft: -30}}>
                <Text style={{fontFamily: 'serif', fontSize: 50, marginBottom: 170}}>You realize that you can act in a way that is most useful and effective to you.</Text>
            </View>,
            <View style={{ backgroundColor: '#F27255', height: 750, width: 375, alignItems: 'center', justifyContent: 'center', marginTop: 50, marginLeft: -30}}>
                <Text style={{fontFamily: 'serif', fontSize: 50, marginBottom: 170}}>Do a check in three times a day for the next week.</Text>
            </View>,
            <View style={{ backgroundColor: '#7973EB', height: 750, width: 375, alignItems: 'center', justifyContent: 'center', marginTop: 50, marginLeft: -30}}>
                <Text style={{fontFamily: 'serif', fontSize: 50, marginBottom: 170}}>Problem solve any difficulties.</Text>
            </View>,
            <View style={{ backgroundColor: '#DDEB73', height: 750, width: 375, alignItems: 'center', justifyContent: 'center', marginTop: 50, marginLeft: -30}}>
                <Text style={{fontFamily: 'serif', fontSize: 50, marginBottom: 170}}>Checking in empowers you to be responsive instead of reactive in life.</Text>
            </View>,
            <View style={{ backgroundColor: '#B23AFC', height: 750, width: 375, alignItems: 'center', justifyContent: 'center', marginTop: 50, marginLeft: -30}}>
                <Button
                    color="#50C7C7"
                    round size="small"
                    onPress={() => {
                    this.props.navigation.navigate('Home')
                    }}
                >Home</Button>
            </View>
        ];
        return elements;
    }
    render(){
        return (
            
            // Display content
            <View style={styles.container}>
              <Block>
                  <DeckSwiper components={this.deckSwiperElements()}/>
              </Block>
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
    textInputContainer: {
        width: 350,
        marginBottom: 10,
    },
    textStyle: {
        fontFamily: 'serif'
    }
});
