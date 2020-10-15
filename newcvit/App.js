import React, { Component } from 'react';
import { View , StyleSheet, StatusBar , Text, Image } from 'react-native';
import MainScreenNavigator from './app/config/router';

class App extends Component {
  state = {};
  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source = {require('./image/image1.png')} />
        <StatusBar backgroundColor="#2b2b39" barStyle="light-content" />
          <MainScreenNavigator />
         
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#BFE5D9',
  },
  image:{
    backgroundColor: '#BFE5D9',
    width: 120,
    height: 120,
    borderRadius: 400/2,
    marginTop: 20,
    marginLeft: 150,
    marginRight: 20,
    
  },
});