/*
Author: Aubrey Nickerson
Date: July 2nd, 2020
Program: BalancingEmotionalLogicalThoughtScreen.js
Project: Counselling App

This is the assertiveness screen. It provides tips on
how the user can realize where changes are needed and believing
in the users rights. 
*/

import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Text, Button } from 'galio-framework';

export default class BalancingEmotionalLogicalThoughtScreen extends Component{
    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
            <Text  style={styles.textContainer} h5>
                Two factors influence the appraisal process: emotion, and logic or rational thought.
                Emotion is almost always the stronger of the two influences, but it is generally not the most accurate.
            </Text>
                <View style={styles.cardContainer}>
                    <View>
                        <Image
                          source={require("../assets/takeanote.jpg")}
                          style={{
                              height: 200,
                              width: 400
                          }}
                        />
                    </View>
                    <View style={{ padding: 10, width: 400 }}>
                        <Text>Counteract Negative Thoughts</Text>
                        <Text style={{ color: "#777", paddingTop: 5 }}>
                            Write down your negative thoughts. Try to look for evidence for and against this thought.
                            Write down the evidence and then write a more balanced thought.
                        </Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View>
                        <Image
                          source={require("../assets/brainstorm.jpg")}
                          style={{
                              height: 200,
                              width: 400
                          }}
                        />
                    </View>
                    <View style={{ padding: 10, width: 400 }}>
                        <Text>Brainstorming</Text>
                        <Text style={{ color: "#777", paddingTop: 5 }}>
                            Writing in a journal can be helpful. Try pinpointing in one sentence what is your biggest problem.
                            Then think of various solutions. Like a spider's web, draw lines outwards with various solutions to
                            your problem. Let your imagination roam free.  
                        </Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View>
                        <Image
                          source={require("../assets/phrenology.jpg")}
                          style={{
                              height: 200,
                              width: 400
                          }}
                        />
                    </View>
                    <View style={{ padding: 10, width: 400 }}>
                        <Text>Conduct Thought & Behavior Experiments</Text>
                        <Text style={{ color: "#777", paddingTop: 5 }}>
                            It can also be effective to test your thoughts for validity. For example, you can conduct
                            and experiment to see which thought holds more validity. Try replacing negative for positive thoughts. 
                        </Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View>
                        <Image
                          source={require("../assets/wakeupgotosleep.jpg")}
                          style={{
                              height: 200,
                              width: 400
                          }}
                        />
                    </View>
                    <View style={{ padding: 10, width: 400 }}>
                        <Text>Use Visualization, Morning and Night</Text>
                        <Text style={{ color: "#777", paddingTop: 5 }}>
                            When you wake up in the morning, before you get out of bed, imagine your day going well.
                            No matter what you have scheduled, put a positive outcome on it. Later, when the day is over, 
                            before you go to bed, put your positive imagination to use again. This way, before you fall asleep, you have
                            filled your mind with positive imagery, which in turn instills and lets your mind entertain positive possibilities
                            and outcomes.
                        </Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View>
                        <Image
                          source={require("../assets/positivethinking.jpg")}
                          style={{
                              height: 200,
                              width: 400
                          }}
                        />
                    </View>
                    <View style={{ padding: 10, width: 400 }}>
                        <Text>Practice Positive Thinking</Text>
                        <Text style={{ color: "#777", paddingTop: 5 }}>
                            Remember, there is no such thing as failure, only results or consequences from actions. If you don't like
                            the results you need to practice positive thinking. One helpful exercise is to look for opportunities 
                            every day to change your thinking.
                        </Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View>
                        <Image
                          source={require("../assets/schedulingactivities.jpg")}
                          style={{
                              height: 200,
                              width: 400
                          }}
                        />
                    </View>
                    <View style={{ padding: 10, width: 400 }}>
                        <Text>Scheduling Daily Positive Activities</Text>
                        <Text style={{ color: "#777", paddingTop: 5 }}>
                            Schedule a brief 10 minute positive activity into your daily schedule. This positive break can help recharge you,
                            gives you something to look forward to, interrupts negative thinking and makes you feel good, if only for a few minutes.
                            For the next week, write down one pleasant activity which you enjoy (as long as it's not unhealthy) or one that gives you
                            a sense of accomplishment, into your day timer. 
                        </Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View>
                        <Image
                          source={require("../assets/reframedisappointment.jpg")}
                          style={{
                              height: 200,
                              width: 400
                          }}
                        />
                    </View>
                    <View style={{ padding: 10, width: 400 }}>
                        <Text>Re-frame Disappointment as Normal</Text>
                        <Text style={{ color: "#777", paddingTop: 5 }}>
                            Disappointment is a normal part of life. Cut yourself a little slack. How you react to life's ups and downs can have
                            a big impact on your overall happiness and future. It's important to allow yourself to feel your
                            disappointment, but take an objective look at it as well. Balance of emotion and rational/logic thinking.
                        </Text>
                    </View>
                </View>
                <Button
                    color="#50C7C7"
                    round size="small"
                    style={styles.buttonContainer}
                    onPress={() => {
                    this.props.navigation.navigate('Home')
                    }}
                >Home</Button>
            </View>
            </ScrollView>  
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
      marginTop: 40,
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 10,
      color: 'black',
      fontWeight: 'bold'
    },
    textInputContainer: {
        width: 350,
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 20
    },
    cardContainer : {
        backgroundColor: "#eee", 
        borderRadius: 10, 
        overflow: "hidden", 
        marginTop: 5, 
        marginBottom: 5
    }
});
