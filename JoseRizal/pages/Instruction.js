import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

export default class InstructionScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (

      <ImageBackground style={styles.background} source={require('./images/bplain.jpg')}>
        <View>
            <ImageBackground style={styles.logo} source={require('./images/how2.png')}></ImageBackground>
            <Text style={styles.headerText}> 1. Press any book and locate feather </Text>
            <Text style={styles.headerText2}> 2. Win Prizes </Text>
            <Text style={styles.headerText2}> 3. Play Again </Text>
          </View>
        
        <View>
          <TouchableOpacity onPress={() =>navigate('HomeScreen')}>
            <Image source={require('./images/close.png')} style={styles.exitButton}></Image>
            </TouchableOpacity>
        </View>
     
        
     
      </ImageBackground>
    
    );
  }
}

const styles = StyleSheet.create({
    logo: {
    width: 400,
    height: 550,
    marginTop: 50,
    alignSelf: 'center',
    
    },
    background: {
       flex: 1,
      },
    container: {
        width: 370,
        height: 370,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 5,
        borderRadius: 25,
    },
   
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: -375,
        textAlign: 'center',
    },
    headerText2: {
      fontSize: 22,
      marginLeft: 20,
      marginTop: 10,
      fontWeight: 'bold',
      textAlign: 'left',
  },
    logo2:{
      width: 350,
      height: 350,
      marginTop: 240,
      alignSelf: 'center',
      resizeMode: "contain",
      position: "absolute",
    },
   
    exitButton: {
      marginTop: 120,
      width: 30,
      height: 40,
      alignSelf: 'center',
      paddingHorizontal: 25,
      paddingVertical: 10,
      
    },
    
});