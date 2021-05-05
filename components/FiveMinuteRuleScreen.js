import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Container, DeckSwiper,  Card, CardItem, Left, Body, Tab, Tabs, ScrollableTab } from 'native-base';
import { Text, Button } from 'galio-framework';

const cards = [
    {
        text: 'Set a timer and allow yourself to ruminate for 5 minutes. (Swipe left or right)',
        image: require("../assets/ruminate.jpg")
    },
    {
        text: 'After 5 minutes, ask yourself "Have I made progress towards solving the problem?"',
        image: require("../assets/progress.jpg")
    },
    {
        text: '"Do I now understand something new about the situation?"',
        image: require("../assets/solution.jpg")
    },
    {
        text: '"Do I feel less depressed, anxious, etc.?"',
        image: require("../assets/happiness.jpg")
    }
]

const cards2 = [
    {
        text: 'When you become aware of an intrusive thought or rumination, tell yourself "STOP"',
        image: require("../assets/beaware.jpg")
    },
    {
        text: "Say \"STOP\" out loud or internally if you're with other people",
        image: require("../assets/stop.jpg")
    },
    {
        text: 'If it seems helpful, visualize a red STOP sign',
        image: require("../assets/yougottastop.jpg")
    },
    {
        text: 'Once you interrupt the thought, introduce a more accurate thought, name the thought, divert your attention, or refocus on the present moment',
        image: require("../assets/thinkingabout.jpg")
    }
]

export default class FiveMinuteRuleScreen extends Component{
    
    render(){
        return(
        <Container style={{backgroundColor: "#B23AFC",}}>
            <Tabs locked renderTabBar={()=> <ScrollableTab style={{height: 120}}/> }>
                <Tab heading="The 5 Minute Rule" >
                    <View style={styles.container}>
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
                                    <Image style={{height: 500, flex: 1}} source={item.image}/>
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
                </Tab>
                <Tab heading="The Stop Technique">
                    <View style={styles.container}>
                        <ScrollView>
                        <Text style={styles.textContainer}> 
                        </Text>
                        <DeckSwiper
                            ref={(c) => this._deckSwiper = c}
                            dataSource={cards2}
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
                                    <Image style={{height: 500, flex: 1}} source={item.image}/>
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
                </Tab>
                
                <Tab heading="Mindfulness">
                    <View style={styles.container}>
                        <ScrollView>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>What is Mindfulness?</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    Mindfulness is observing what we're thinking or feeling in the present moment and describing it to
                                    ourselves without judgment. When we're mindful, we don't try to change our thoughts or emotions: we're
                                    simply trying to modify our relationships with them. More specifically, instead of fearing and avoiding
                                    our thoughts and emotions, we learn to accept and co-exist with them.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Acknowledging Mindfulness</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    Mindfulness lets us recognize the thought, observe it, name it, and let it go. By acknowledging our
                                    thoughts and emotions instead of avoiding or denying them, we start to break the cycle of anxiety
                                    symptoms fuelling more anxiety.
                                </Text>
                            </View>
                        </View>
                        <Button
                            color="#50C7C7"
                            round size="small"
                            style={styles.buttonContainer2}
                            onPress={() => {
                            this.props.navigation.navigate('Home')
                            }}
                        >Home
                        </Button>
                        </ScrollView>
                    </View>
                </Tab>
                
                <Tab heading="Using Mindfulness">
                    <View style={styles.container}>
                        <ScrollView>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Using Mindfulness</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    Worries are the same thoughts that tend to come back to us over and over again. Taking
                                    a mindfulness approach can be more effective for rumination and worrying than using the
                                    "challenging your thinking" technique we practiced earlier.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Two Situations of Mindfulness</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    Worrying about getting fired for no reason--if you often worry about this in the absence
                                    of any significant reason, questioning and analyzing this thought won't be the most helpful
                                    solution because you already know there is little or no evidence to support it. 
                                </Text>
                                <Text style={{  paddingTop: 5 }}>
                                    Worrying about developing a fatal illness--if, in the absence of current health problems, you're 
                                    preoccupied by this thought, and questioning it doesn't make a difference, using a mindfulness
                                    approach is a good option. 
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Recap</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    When faced with automatic thinking patterns or worry and rumination, you now know two anxiety
                                    reducing techniques: challenging your thinking and mindfulness. What approach you choose depends
                                    on the nature of the thought and what works best for you. 
                                </Text>
                            </View>
                        </View>
                        <Button
                            color="#50C7C7"
                            round size="small"
                            style={styles.buttonContainer3}
                            onPress={() => {
                            this.props.navigation.navigate('Home')
                            }}
                        >Home
                        </Button>
                        </ScrollView>
                    </View>
                </Tab>
            </Tabs>
        </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#B23AFC',
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
        marginTop: 600,
        marginBottom: 30,
        marginLeft: 110,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonContainer2: {
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 110,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonContainer3: {
        marginTop: 25,
        marginBottom: 30,
        marginLeft: 110,
        alignItems: "center",
        justifyContent: "center"
    },
    cardContainer : {
        backgroundColor: "#eee", 
        borderRadius: 10, 
        overflow: "hidden", 
        marginTop: 10, 
        marginBottom: 5,
        marginLeft: 5,
        width: 420
    }
});