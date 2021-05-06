/*
Author: Aubrey Nickerson
Date: July 4th, 2020
Program: ChallengingNegativeThoughtsScreen.js
Project: Counselling App

This is the challenging negative thoughts screen. It contains
a stack of cards where the user swipes left or right. Each card
gives tips on how the user can stay calm and not have panic attacks.
*/

// Import libraries
import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Text, Button } from 'galio-framework';
import { Container, DeckSwiper, Card, CardItem, Left, Body } from 'native-base';

// Instantiate cards
const cards = [
    {
        text: 'Depression, poor self-esteem, and anxiety are often the result of irrational negative thoughts. (Swipe left or right)',
        image: require("../assets/depression.jpg")
    },
    {
        text: 'Someone who regularly receives positive feedback at work might feel that they are horrible at their job because of one criticism.',
        image: require("../assets/leftout.jpg")
    },
    {
        text: 'Their irrational thought about job performance will dictate how they feel about themselves.',
        image: require("../assets/jobperformance.jpg")
    },
    {
        text: 'Challenging irrational thoughts can help us change them.',
        image: require("../assets/challengethoughts.jpg")
    },
    {
        text: "Ask yourself these questions, \"Is there substantial evidence for my thought?\"",
        image: require("../assets/selfreflect.jpg")
    },
    {
        text: '"Is there evidence contrary to my thought?"',
        image: require("../assets/thinking.jpg")
    },
    {
        text: '"Am I attempting to interpret this situation without all the evidence?"',
        image: require("../assets/reflect.jpg")
    },
    {
        text: '"What would a friend think about this situation?"',
        image: require("../assets/helpingothers.jpg")
    },
    {
        text: '"If I look at the situation positively, how is it different?"',
        image: require("../assets/positivethoughts.jpg")
    },
    {
        text: '"Will this matter a year from now? How about five years from now?"',
        image: require("../assets/timeflies.jpg")
    },
]

export default class ChallengingNegativeThoughtsScreen extends Component{
    // Display content
    render(){
        return(
                <Container style={{backgroundColor: "#B23AFC"}}>
                    <View style={{marginTop: 20, flex: 1}}>
                        <ScrollView>
                        <Text style={styles.textContainer}> 
                        </Text>
                        <DeckSwiper
                          ref={(c) => this._deckSwiper = c}
                          dataSource={cards}
                          renderItem={item => 
                            <Card style={{ elevation: 3 }}>
                              <CardItem>
                                <Left>
                                  <Body>
                                      <Text style={styles.textContainer}>{item.text}</Text>
                                  </Body>
                                </Left>
                              </CardItem>
                              <CardItem cardBody>
                                  <Image style={{height: 525, flex: 1}} source={item.image}/>
                              </CardItem>
                            </Card>
                          }              
                        />
                        <Button
                            color="#50C7C7"
                            round size="small"
                            style={styles.buttonContainer}
                            onPress={() => {
                            this.props.navigation.navigate('Home')
                            }}
                        >Home
                        </Button>
                        </ScrollView>   
                    </View>
                </Container>
                
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
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold'
    },
    textInputContainer: {
        width: 350,
        marginBottom: 10,
    },
    buttonContainer: {
        marginLeft: 110,
        marginTop: 665,
        marginBottom: 10,
    },
    cardContainer : {
        backgroundColor: "#eee", 
        borderRadius: 10, 
        overflow: "hidden", 
        marginTop: 5, 
        marginBottom: 5
    }
});
