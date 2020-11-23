import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class InstructionScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (

      <ImageBackground style={styles.background} source={require('./images/bplain.jpg')}>
        <View>
            <ImageBackground style={styles.logo} source={require('./images/how2.png')}></ImageBackground>
            <Text style={styles.headerText}> 1. Press any book and locate feather </Text>
            <Text style={styles.headerText2}> 2. Win Prizes: </Text>
            <View style={styles.imageRow} >
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Text style={styles.headerText3}> 2000 Coins</Text>
            </View>
            <View style={styles.imageRow} >
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Text style={styles.headerText3}> 1000 Coins</Text>
            </View>
            <View style={styles.imageRow} >
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            
            <Text style={styles.headerText3}> 500 Coins</Text>
            </View>
            <View style={styles.imageRow} >
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            
            <Text style={styles.headerText3}> 200 Coins</Text>
            </View>

            <View style={styles.imageRow} >
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Image  style={styles.imageFeather} source={require('./images/feather.png')}></Image>
            <Text style={styles.headerText3}> 20 Coins</Text>
            </View>
            
          </View>
        
        <View>
          <TouchableOpacity onPress={() =>navigate('HomeScreen')}>
            <Image source={require('./images/return.png')} style={styles.exitButton}></Image>
            </TouchableOpacity>
        </View>
     
        
     
      </ImageBackground>
    
    );
  }
}

const styles = StyleSheet.create({
    logo: {
    width: wp('100%'),
    height: hp('78%'),
    marginTop: hp('7%'),
    alignSelf: 'center',
    resizeMode: 'contain',
    },
    imageFeather: {
      width: wp('7.5%'),
      height: hp('5%'),
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    imageRow: {
     flexDirection: 'row',
     marginLeft :hp('5%'),
    },

    background: {
       flex: 1,
      },
    headerText: {
        fontSize: hp('3.2%'),
        fontFamily: 'Back to Black Demo',
        marginTop: hp('-57.5%'),
        textAlign: 'center',
    },
    headerText2: {
      fontSize: hp('3.2%'),
      fontFamily: 'Back to Black Demo',
      marginLeft: hp('1.5%'),
      marginTop: hp('0.5%'),
      textAlign: 'left',
  },
  headerText3: {
    fontSize: hp('3.2%'),
    fontFamily: 'Back to Black Demo',
    marginLeft: hp('4%'),
  },   
    exitButton: {
      marginTop: hp('4%'),
      width: wp('40%'),
      height: hp('22.5%'),
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    
});