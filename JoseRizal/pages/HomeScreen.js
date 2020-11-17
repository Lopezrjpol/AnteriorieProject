import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Image } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground style={styles.background} resizeMode="cover" source={require('./images/bplain.jpg')}>
        <Image style={styles.logo} source={require('./images/logo1.png')}></Image>
       

        <View style= {styles.boxesRow}>
        <TouchableOpacity onPress={() =>navigate('GameScreen')} >
            <Image style={styles.playButton} source={require('./images/play.png')}></Image>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() =>navigate('InstructionScreen')}>
            <Image style={styles.howButton} source={require('./images/how.png')}></Image>
        </TouchableOpacity>
        </View>

     </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%'
    },
    logo:{
      width: 350,
      height: 350,
      marginTop: 50,
      alignSelf: 'center',
    },
    boxesRow: {
      flexDirection: 'row',
      marginTop: 50,    
    },
    logo2:{
      marginTop: -170,
      width: 400,
      height: 300,
      alignSelf: 'center',
      resizeMode: "contain"
    },
    playButton: {
      width: 200,
      height: 100,
      marginLeft: 5,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    howButton: {
      width: 200,
      height: 100,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
});