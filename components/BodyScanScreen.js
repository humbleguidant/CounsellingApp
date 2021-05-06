/*
Author: Aubrey Nickerson
Date: July 3rd, 2020
Program: BodyScanScreen.js
Project: Counselling App

This is the body scan screen. It gives 
descriptions on the different side effects
that a user can experience when feeling extrememly
distressed or tension arising.
*/

// Import libraries
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Block, Accordion } from 'galio-framework';

// Add key-pair list of defintions
const data = [
  { title: "Recognizing Warning Signs", content: "What warning signs do you experience when you feel extremely distressed or tension arising?",
    icon: {
      name: 'keyboard-arrow-up',
      family: 'material',
      size: 50,
    }
  },
  { title: "Tachycardia", content: "If you have Tachycardia, your heart may beat up to 400 times per minute. This can cause dizziness, lightheadedness, or a fluttering in the chest."},
  { title: "Rapid Eye Movement", content: "Your eyes move without your control. It might be fast, then slow, then fast again. The movement might be in one eye, but it's usually in both eyes."},
  { title: "Leg & Eye Twitch", content: "Anxiety twitching can affect any muscles in the body and any number of muscles at a time. It may last for a few seconds or much longer. Anxiety twitching often gets worse when you’re trying to go to sleep, but usually stops while you’re sleeping." },
  { title: "Shortness of Breath", content: "The brain is wired to react to fearful situations with a fight or flight response. This response includes an increased heart rate so that the blood pumps to the organs faster and readies the muscles for action. It also causes a person to breathe more quickly to provide more oxygen to the muscles. The result can be a feeling of being out of breath."},
  { title: "Upset Stomach", content: "When you are anxious, some of the hormones and chemicals released by your body enter your digestive tract, where they interfere with digestion. They have a negative effect on your gut flora (microorganisms that live in the digestive tract and aid digestion) and decrease antibody production. The resulting chemical imbalance can cause a number of gastrointestinal conditions."},
  { title: "Thoughts", content: "Unhelpful thoughts can contribute to the development of anxiety. Certain types of irrational thoughts - such as appraisals, interpretations of events, catastrophic thinking (worst case scenarios and overestimation of danger), and other thoughts that are logically irrational may lead to difficulty coping and the development of anxiety symptoms."},
  { title: "Image", content: "Involuntary images and visual memories are prominent in many types of psychopathology. Patients with posttraumatic stress disorder, other anxiety disorders, depression, eating disorders, and psychosis frequently report repeated visual intrusions corresponding to a small number of real or imaginary events, usually extremely vivid, detailed, and with highly distressing content."},
  { title: "Thinking Processes", content: "The content of unwanted thinking often focuses on sexual or violent or socially unacceptable images. People who experience unwanted thinking are afraid that they might commit the acts they picture in their mind."},
  { title: "Mood", content: "Sustained sadness, unexplained crying spells, pessimism, indifference, apathy, feelings of guilt, worthlessness, loss of energy, lethargy, social withdrawal, inability to concentrate, indecisiveness, recurring thoughts of death or suicide are all symptoms of mood disorder."},
  { title: "Behavior", content: "Restlessness, agitation, agoraphobia, exaggerated startle reflex, and usage of drugs or alcohol to self-medicate the symptoms"},
];

export default class BodyScanScreen extends Component{
    render(){
      // display content.
        return (<View style={styles.container}>
                <ScrollView>
                  <Block style={styles.blockContainer} shadow>
                    <Accordion style={{backgroundColor:"#34caf7"}} dataArray={data} contentStyle={styles.textContainer}/>
                  </Block>
                  <Button
                      color="#50C7C7"
                      style={styles.buttonContainer}
                      round size="small"
                      onPress={() => {
                        this.props.navigation.navigate('Home')
                      }}
                  >Home</Button>
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
      fontSize: 17,
      color: 'black',
      fontFamily: 'serif',
      fontWeight: 'bold'
    },
    textInputContainer: {
        width: 350,
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 40,
        marginBottom: 10,
        marginLeft: 65
    },
    blockContainer: {
        marginTop: 65,
        height: 600,
        width: 350
    }
});
