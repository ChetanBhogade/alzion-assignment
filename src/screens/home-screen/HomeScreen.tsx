import {Text, View} from 'react-native';
import React from 'react';

import Styles from './HomeScreenStyles';

const HomeScreen = () => {
  return (
    <View style={Styles.root}>
      <View style={Styles.container}>
        <Text style={Styles.pageTitle}>HomeScreen</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
