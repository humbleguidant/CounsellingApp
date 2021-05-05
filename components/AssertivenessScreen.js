import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Content, Card, CardItem, Left, Body } from 'native-base';
import { Text, Button } from 'galio-framework';

export default class AssertivenessScreen extends Component{
    render(){
        return(
            
            <Container style={{backgroundColor: "#B23AFC",}}>
                <Content style={{backgroundColor: "#B23AFC",}}>
                    <Card style={{flex: 0, backgroundColor: "#B23AFC", marginTop: 40}} noShadow transparent>
                        <CardItem style={{backgroundColor: "#B23AFC"}}>
                            <Left>
                                <Body >
                                    <Text style={styles.textContainer}>1.  Realize Where Changes Are Needed and Believe in Your Rights.</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem style={{backgroundColor: "#B23AFC"}}>
                            <Body>
                                <Image source={require('../assets/makeachange.png')} style={{height: 225, width: 400, flex: 1, marginBottom: 15}}/>
                                <Text style={styles.textContainer2}>Keeping a diary may help you assess how intimidated, compliant, passive or timid you are or how
                                      demanding, whiny, or aggressive others are. Use desentization or role-playing to reduce the anxiety.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{flex: 0, backgroundColor: "#B23AFC", marginTop: 10}} noShadow transparent>
                        <CardItem style={{backgroundColor: "#B23AFC"}}>
                            <Left>
                                <Body >
                                    <Text style={styles.textContainer}>2.  Figure Out Appropriate Ways of Asserting Yourself in Each Specific
                                                                           Situation That Concerns You.
                                    </Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem style={{backgroundColor: "#B23AFC"}}>
                            <Body>
                                <Image source={require('../assets/selfgrowth.jpg')} style={{height: 225, width: 400, flex: 1, marginBottom: 15}}/>
                                <Text style={styles.textContainer2}>Describe (to the other person inolved) the trouble some situation as you see it.
                                                                   Be very specific about time and actions, don't make general accusations like "you're
                                                                   always hostile... upset... busy." Be objective; Focus on his/her behavior, not on his/her apparent motives.{"\n"}
                                </Text>                               
                                <Text style={styles.textContainer2}>Describe your feelings, using an "I" statement which shows you take responsibility 
                                                                    for your feelings. Be firm and strong, look at them, be sure of yourself, don't get 
                                                                    emotional. Focus on positive feelings related to your goals if you can, not on your
                                                                    resentment of the other person. Sometimes it is helpful to explain why you feel as 
                                                                    you do, so your statement becomes "I feel ____ because ____."{"\n"}
                                </Text>
                                <Text style={styles.textContainer2}>Describe the changes you'd like made, be specific about what action should stop and what
                                                                    should start. Be sure the requested changes are reasonable, consider the other person's 
                                                                    needs to, and be willing to make changes yourself in return. In some cases, you may already
                                                                    have explicit consequences in mind if the other person makes the desired changes and if he/
                                                                    she doesn't. If so, these should be clearly described to. Don't make dire threats, if you 
                                                                    can't or won't carry them out.

                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{flex: 0, backgroundColor: "#B23AFC", marginTop: 10}} noShadow transparent>
                        <CardItem style={{backgroundColor: "#B23AFC"}}>
                            <Left>
                                <Body >
                                    <Text style={styles.textContainer}>3.  Practice Giving Assertive Responses</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem style={{backgroundColor: "#B23AFC"}}>
                            <Body>
                                <Image source={require('../assets/listen.jpg')} style={{height: 225, width: 400, flex: 1, marginBottom: 15}}/>
                                <Text style={styles.textContainer2}>Another technique to try when confronting especially difficult situations or
                                                                    people is called the broken record. You calmly and firmly repeat a short, clear
                                                                    statement over and over until the other person gets the message. For example, "I want you to be home by midnight," "I don't like the product and I want my money
                                                                    back," "No, I will not sign that document" 
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{flex: 0, backgroundColor: "#B23AFC", marginTop: 10}} noShadow transparent>
                        <CardItem style={{backgroundColor: "#B23AFC"}}>
                            <Left>
                                <Body >
                                    <Text style={styles.textContainer}>4.  Try Being Assertive in Real Life Situations</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem style={{backgroundColor: "#B23AFC"}}>
                            <Body>
                                <Image source={require('../assets/ican.jpg')} style={{height: 225, width: 400, flex: 1, marginBottom: 15}}/>
                                <Text style={styles.textContainer2}>Start with the easier, less stressful situations. Build some confidence. 
                                                                    Make adjustments in your approach as needed. 
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Button
                        color="#50C7C7"
                        round size="small"
                        style={styles.buttonContainer}
                        onPress={() => {
                        this.props.navigation.navigate('Home')
                        }}>
                        Home
                        </Button>
                    </View>
                </Content>
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
    textContainer2: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
    textInputContainer: {
        width: 350,
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    cardContainer : {
        backgroundColor: "#eee", 
        borderRadius: 10, 
        overflow: "hidden", 
        marginTop: 5, 
        marginBottom: 5
    }
});