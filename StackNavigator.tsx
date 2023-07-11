import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../blocks/home/Home';
import VideoDetails from '../blocks/videoDetails/VideoDetails';

const Stack = createNativeStackNavigator();
export default class StackNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="VideoDetails" component={VideoDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
