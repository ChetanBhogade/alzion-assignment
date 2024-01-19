import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import Navigation from './navigations';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
