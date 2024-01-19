import React, {useEffect, useRef, useState} from 'react';
import {AppState, AppStateStatus} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootNavigationTypes} from './NavigationModel';
import HomeScreen from '../screens/home-screen/HomeScreen';

const DefaultFirstScreen = RootNavigationTypes.HomeScreen;

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => <></>}}
      initialRouteName={DefaultFirstScreen}>
      <Stack.Screen
        name={RootNavigationTypes.HomeScreen}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
