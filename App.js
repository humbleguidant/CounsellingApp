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

const Stack = createStackNavigator();
function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="Register" component={RegisterScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="CheckIn" component={CheckInScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="BodyScan" component={BodyScanScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="BalancingEmotionalLogicalThought" component={BalancingEmotionalLogicalThoughtScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="ChallengingNegativeThoughts" component={ChallengingNegativeThoughtsScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="ManagingStress" component={ManagingStressScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="Assertiveness" component={AssertivenessScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="HealthyRelationships" component={HealthyRelationshipsScreen} options={{headerMode: 'none', headerShown: false}}/>
          <Stack.Screen name="FiveMinuteRule" component={FiveMinuteRuleScreen} options={{headerMode: 'none', headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;