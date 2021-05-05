import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import { Text, Button } from 'galio-framework';


export default class HealthyRelationshipsScreen extends Component{
    render(){
        return(
        
        <Container style={{backgroundColor: "#B23AFC",}}>
            <ScrollView>
            <Tabs renderTabBar={()=> <ScrollableTab style={{height: 120}}/>}>
                <Tab heading="Things to Avoid" >
                    <View style={styles.container}>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Rapid high-intensity involvement</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    This is romanticized as "love at first sight" but is usually more about "lust at first sight."
                                    People use these relationships in the same way they use drugs, seeking instant gratification
                                    in the form of an intensive experience.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Dishonesty, distrust, manipulation, and controlling behavior</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    People spend a lot time trying to control each other's moods, thoughts, perceptions, and behaviors.
                                    They blame their partners for their own moods, feelings, and behavior, and say "you made me do/feel/think..."
                                    At the same time, there are things the couple hide from each other and subjects they don't talk about it.
                                    There is a lot of attempted mind reading, assuming, and hinting. 
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Desire for total union and social/emotional isolation</Text>
                                <Text style={{  paddingTop: 5 }}>
                                     Again, fearing they'll lose their partners if they let them get out of reach, or because they
                                     feel a part of them is missing when they're apart, people often try to completely merge their
                                     lives and give up their individual identities, clinging to and smothering each other. At the same
                                     time, they tend not to have other close relationships, and sometimes not to even have much social 
                                     contact. They're jealous and want the partner all to themselves plus they are often afraid of what
                                     friends and family would say about the relationship (another parallel to addiction.)
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Desire to fix the other/solve his/her problems</Text>
                                <Text style={{  paddingTop: 5 }}>
                                     There is often a strong element of rescuing, feeling sorry for our partners because they have so
                                     many problems and such painful lives. This distracts us from dealing with our own problems, let's us
                                     feel good about helping and feel superior at the same time, and let's us feel safe from abandonment
                                     beacause they need us. 
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
                        >Home
                        </Button>
                    </View>
                </Tab>
                <Tab heading="Healthy Relationships">
                    <View style={styles.container}>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Gradual, step-by-step development in stages</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    Healthy people know it's wise to be cautious and not become too vulnerable, physically or emotionally,
                                    until they know each other well enough to know it's safe. So they take it slow and check each other out.
                                    They recognize lust or infatuation for what it is and don't decide they're in love until they know each other
                                    well.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Honesty, trust, respect, and acceptance</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    Healthy partners don't try to control each other, just as they don't want to be controlled. They
                                    empathize and put themselves in each other's shoes, and trust the other to do the same, but also
                                    accept the other's right to disagree and make different choices. They say what they want each other
                                    to know, clearly and directly, and expect one another to do the same. They ask for what they want instead
                                    of hinting or manipulating.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Acceptance of separateness, independence, and continued full social life</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    Healthy partners accept that they are different people with different interests, different histories, and
                                    so on. They maintain their other human connections, knowing that not one person, including their partner,
                                    can meet all of their needs. They are confident of their ability to get along on their own, so they are
                                    together because they choose to be, not because they feel they need to be. 
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Expectation that each will solve his/her own problems</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    No rescuing--healthy partners know they can't fix each other's lives, and expect one another to be competent
                                    to do so. They can be supportive and care about something without taking on responsibility for it.
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
                        >Home
                        </Button>
                    </View>
                </Tab>
                
                <Tab heading="Things to Do">
                    <View style={styles.container}>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Work on yourself first</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    We attract, and are attracted to, people who are at about the same level of emotional and mental health as
                                    ourselves--they are our mirrors. The way to attract a healthy person is to be one. 
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Look in reasonable places</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    Don't go shopping for bread at the hardware store--you aren't going to find healthy people in unhealthy places.
                                    You'll never get healthy love from someone who isn't healthy enough to give it, no matter how hard you try. 
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Be yourself</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    If the goal is to find a partner who will accept us as we are, our only chance is to let possible
                                    partners see the real us. If we are putting on an act, no one can have have a chance to know and accept us. 
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Be picky</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    Tell yourself that you have the right to be treated with respect and warmth and that you deserve to be with
                                    someone who is healthy and a pleasure to be with, and you won't accept (or give) less. Never be with someone
                                    out of pitty or a sense of obligation.  
                                </Text>
                            </View>
                        </View>
                        
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Don't expect someone to change</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    People don't usually change much. If they aren't the way you want them to be now, they probably never will be.
                                    Even if they may change, you can't have a relationship with someone's potential, only with the real person
                                    that exists now.  
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Take your time</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    Go step by step, being cautious and checking the other person out as you go. Increase your vulnerability and your
                                    depth of involvement little by little as you can see that it's safe to do so. 
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Get feedback</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    Share what's going on in your relationship with others whose wisdom you trust. You may want to get a relationship
                                    sponsor, someone with solid realtionship skills, and get their reactions. They may see more clearly than you when
                                    your emotions are involved. 
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cardContainer}>
                            <View style={{ padding: 10, width: 400 }}>
                                <Text style={{ fontWeight: 'bold' }}>Listen to your gut</Text>
                                <Text style={{  paddingTop: 5 }}>
                                    Think about past relationship choices that went badly, and think back to your inner voice, or gut feeling or
                                    instincts, at that time. If you get uneasy feelings about someone, pay attention! The most important factors for a 
                                    lasting relationship are safety, comfort, and quiet happiness, not heart-pounding excitement (often that is really
                                    based on fear)! 
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
                        >Home
                        </Button>
                    </View>
                </Tab>
                
            </Tabs>
            </ScrollView>
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