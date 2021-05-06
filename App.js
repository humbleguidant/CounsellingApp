/*
Author: Aubrey Nickerson
Date: July 1st, 2020
Program: App.js
Project: Counselling App

This is the core of the app. It contains all of the
components that make the app function.
All of the required libraries are imported here.
Every screen is set up here. 
*/

// Import all screens and libraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import RegisterScreen from './components/RegisterScreen';
import CheckInScreen from './components/CheckInScreen';
import BodyScanScreen from './components/BodyScanScreen';
import BalancingEmotionalLogicalThoughtScreen from './components/BalancingEmotionalLogicalThoughtScreen';
import ChallengingNegativeThoughtsScreen from './components/ChallengingNegativeThoughtsScreen';
import ManagingStressScreen from './components/ManagingStressScreen';
import AssertivenessScreen from './components/AssertivenessScreen';
import HealthyRelationshipsScreen from './components/HealthyRelationshipsScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import FiveMinuteRuleScreen from './components/FiveMinuteRuleScreen';

// Run the app
const Stack = createStackNavigator();
function App() {
  return (
    
    // Set up navigation
      <NavigationContainer>
    
          // Initial screen will be login screen
          <Stack.Navigator initialRouteName="Login">
          // Login screen
          <Stack.Screen name="Login" component={LoginScreen} options={{headerMode: 'none', headerShown: false}}/>
          // Forgot Password screen
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{headerMode: 'none', headerShown: false}}/>
          // Register screen
          <Stack.Screen name="Register" component={RegisterScreen} options={{headerMode: 'none', headerShown: false}}/>
          // Home screen
          <Stack.Screen name="Home" component={HomeScreen} options={{headerMode: 'none', headerShown: false}}/>
          // Check in screen
          <Stack.Screen name="CheckIn" component={CheckInScreen} options={{headerMode: 'none', headerShown: false}}/>
          // Body Scan screen
          <Stack.Screen name="BodyScan" component={BodyScanScreen} options={{headerMode: 'none', headerShown: false}}/>
          // Balancing Emotional and Logical Thought screen
          <Stack.Screen name="BalancingEmotionalLogicalThought" component={BalancingEmotionalLogicalThoughtScreen} options={{headerMode: 'none', headerShown: false}}/>
          // Challenging Negative Thoughts screen
          <Stack.Screen name="ChallengingNegativeThoughts" component={ChallengingNegativeThoughtsScreen} options={{headerMode: 'none', headerShown: false}}/>
          // Managing Stress screen
          <Stack.Screen name="ManagingStress" component={ManagingStressScreen} options={{headerMode: 'none', headerShown: false}}/>
          // Assertiveness screen
          <Stack.Screen name="Assertiveness" component={AssertivenessScreen} options={{headerMode: 'none', headerShown: false}}/>
          // Healthy Relationships screen
          <Stack.Screen name="HealthyRelationships" component={HealthyRelationshipsScreen} options={{headerMode: 'none', headerShown: false}}/>
          // Five Minute Rule screen
          <Stack.Screen name="FiveMinuteRule" component={FiveMinuteRuleScreen} options={{headerMode: 'none', headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
