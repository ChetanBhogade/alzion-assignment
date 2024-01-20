import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {RootNavigationTypes} from './NavigationModel';
import HomeScreen from '../screens/home-screen/HomeScreen';
import ProductDetailsScreen from '../screens/product-details-screen/ProductDetailsScreen';

const DefaultFirstScreen = RootNavigationTypes.HomeScreen;

const Stack = createSharedElementStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => <></>}}
      initialRouteName={DefaultFirstScreen}>
      <Stack.Screen
        name={RootNavigationTypes.HomeScreen}
        component={HomeScreen}
      />
      <Stack.Screen
        name={RootNavigationTypes.ProductDetailsScreen}
        component={ProductDetailsScreen}
        sharedElements={(route, otherRoute, showing) => {
          const {productData} = route.params;
          return [`item.${productData.id}.image`];
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
