import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground style={styles.background} source={require('./images/bg2.jpg')}>
        <View>
          <Image style={styles.logo} resizeMode="contain" source={require('./images/cooking.gif')}>
          </Image>
        </View>
        <View>
          <Image style={styles.logo2} source={require('./images/ulamFinder.gif')}>
          </Image>
        </View>

        <View>
        <TouchableOpacity onPress={() =>navigate('GameScreen')} >
            <Text style={styles.playButton}>Play Now</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() =>navigate('InstructionScreen')}>
            <Text style={styles.howButton}>How To Play !</Text>
        </TouchableOpacity>
        </View>

     </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    background: {
     flex: 1,
    },
    logo:{
      width: wp('50%'),
      height: hp('40%'),
      marginTop: hp('5%'),
      marginBottom: hp('1.5%'),
      alignSelf: 'center',
      resizeMode: 'contain',    
    },
    logo2:{
      marginTop: hp('-30%'),
      width: wp('100%'),
      height: hp('50%'),
      alignSelf: 'center',
      resizeMode: "contain"
    },
    playButton: {
      width: wp('55%'),
      height: hp('7.5%'),
      fontSize: hp('3%'),
      marginBottom: hp('2%'),
      alignSelf: 'center',
      fontWeight: 'bold',
      backgroundColor: 'white',
      color: 'black',
      textAlign: 'center',
      borderRadius: hp('3%'),
      paddingVertical: hp('1.5%'),
    },
    howButton: {
      width: wp('42%'),
      height: hp('7.5%'),
      fontSize: hp('3%'),
      alignSelf: 'center',
      fontWeight: 'bold',
      backgroundColor: 'white',
      color: 'black',
      textAlign: 'center',
      borderRadius: hp('3%'),
      paddingVertical: hp('1.5%'),
    },
});