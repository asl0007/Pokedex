// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './screens/MainScreen/MainScreen';
import DetailScreen from './screens/DetailScreen/DetailScreen';
import { StatusBar } from 'react-native';

const AppNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
  },
  DetailScreen: {
    screen: DetailScreen,
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <>
      <StatusBar barstyle="light-content" />
      <AppContainer />
    </>
  );
}
