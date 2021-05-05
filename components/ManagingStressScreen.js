import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Tooltip } from "react-native-elements";
import { Text, Button } from 'galio-framework';

export default class ManagingStressScreen extends Component{
    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textContainer0}>Tap Any of the Questions Below.</Text>
                <Tooltip overlayColor="#B23AFC" backgroundColor="#92ED37" height={325} width={300} popover={<Text style={{fontSize: 20}}>
                                                                                                    {"\u2B24"}  Do not skip meals{"\n"}
                                                                                                    {"\n"}
                                                                                                    {"\u2B24"}  Avoid triggers{"\n"}
                                                                                                    {"\n"}
                                                                                                    {"\u2B24"}  Avoid arguing to compete with someone or to "get the last word" or to talk over someone{"\n"}
                                                                                                    {"\n"}
                                                                                                    {"\u2B24"}  Have a go to person you can talk with to get calm advice on mangaging any conflict
                                                                                                    </Text>}>
                    <Text style={styles.textContainer}>How Can You Prevent Becoming Stressed?</Text>
                </Tooltip>
                <Tooltip overlayColor="#B23AFC" backgroundColor="#37E1ED" height={275} width={275} popover={<Text style={{fontSize: 20}}>
                                                                                                            {"\u2B24"}  Do a Body Scan.{"\n"}
                                                                                                            {"\n"}
                                                                                                            {"\u2B24"}  Rapid eye movement{"\n"}
                                                                                                            {"\n"}
                                                                                                            {"\u2B24"}  Eyelids twitch{"\n"}
                                                                                                            {"\n"}
                                                                                                            {"\u2B24"}  Legs twitch{"\n"}
                                                                                                            {"\n"}
                                                                                                            {"\u2B24"}  Rubbing hands/face
                                                                                                            </Text>}>
                    <Text style={styles.textContainer}>What Signs of Stress Do You Experience?</Text>
                </Tooltip>
                <Tooltip overlayColor="#B23AFC" backgroundColor="#ED5837" height={200} width={300} popover={<Text style={{fontSize: 20}}>
                                                                                                            {"\u2B24"}  Use breathing{"\n"}
                                                                                                            {"\n"}
                                                                                                            {"\u2B24"}  Find a calm space for a few minutes{"\n"}
                                                                                                            {"\n"}
                                                                                                            {"\u2B24"}  Walk away
                                                                                                            </Text>}>
                    <Text style={styles.textContainer}>How Can You Unhook Physically Now?</Text>
                </Tooltip>
                <Tooltip overlayColor="#B23AFC" backgroundColor="#8337ED" height={245} width={300} popover={<Text style={{fontSize: 20}}>
                                                                                                            {"\u2B24"}  Challenge your negative thoughts{"\n"}
                                                                                                            {"\n"}
                                                                                                            {"\u2B24"}  Think about what's going on with the other person that may make them irritable{"\n"}
                                                                                                            {"\n"}
                                                                                                            {"\u2B24"}  Don't take it personally
                                                                                                            </Text>}>
                    <Text style={styles.textContainer}>How Can You Unhook Mentally Now?</Text>
                </Tooltip>
                <Tooltip overlayColor="#B23AFC" backgroundColor="#F5F505" height={300} width={300} popover={<Text style={{fontSize: 20}}>
                                                                                                            {"\u2B24"}  Take a pause before you talk{"\n"}
                                                                                                            {"\n"}
                                                                                                            {"\u2B24"}  Talk it out with a calm person{"\n"}
                                                                                                            {"\n"}
                                                                                                            {"\u2B24"}  Lower your voice and rate of speech{"\n"}
                                                                                                            {"\n"}
                                                                                                            {"\u2B24"}  Avoid verbal competitions{"\n"}
                                                                                                            {"\n"}
                                                                                                            </Text>}>
                    <Text style={styles.textContainer}>How Can You Unhook Verbally Now?</Text>
                </Tooltip>
                <Text style={styles.textContainer}>1.  Remember To Use Symptom {'\n'} Management At Any Given Time</Text>
                <Text style={styles.textContainer2}>{"\u2B24"}  Relaxation{"\n"}
                                                    {"\u2B24"}  Recognizing & challenging distorted thoughts{"\n"}
                                                    {"\u2B24"}  Pacing{"\n"}
                                                    {"\u2B24"}  Grounding{"\n"}
                                                    {"\u2B24"}  Assertiveness{"\n"}
                                                    {"\u2B24"}  Boundaries</Text>
                <Text style={styles.textContainer}>2.  Know and Respect Your Early {"\n"} Warning Signs</Text>
                <Text style={styles.textContainer}>3.  Maintain a healthy life style</Text>
                <Text style={styles.textContainer2}>{"\u2B24"}  Nutrition{"\n"}
                                                    {"\u2B24"}  Sleep exercise life balance (self-care, {"\n"} productivity and leisure)</Text>
                <Text style={styles.textContainer}>4.  Establish a Support Network Inside {"\n"} and Outside of Work</Text>
                <Text style={styles.textContainer}>5.  Aim For Relationships and {"\n"} Boundaries at Work.</Text>
                <Text style={styles.textContainer}>6.  Avoid Overwork.</Text>
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
    textContainer0: {
      color: 'black',
      fontSize: 20,
      fontFamily: 'serif',
      fontWeight: 'bold',
      marginTop: 40,
      marginBottom: 10,
    },
    textContainer: {
      color: 'black',
      fontSize: 20,
      fontFamily: 'serif',
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
    },
    textContainer2: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'serif',
        fontWeight: 'bold',
        marginTop: 0
      },
    textInputContainer: {
        width: 350,
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 30
    },
});