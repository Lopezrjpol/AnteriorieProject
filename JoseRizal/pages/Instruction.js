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
    width: 400,
    height: 550,
    marginTop: 50,
    alignSelf: 'center',
    },
    imageFeather: {
      width: 30,
      height: 30,
      
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    imageRow: {
     flexDirection: 'row',
     marginLeft: 40,
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
        fontWeight: "100",
        fontFamily: 'Back to Black Demo',
        marginTop: -390,
        textAlign: 'center',
    },
    headerText2: {
      fontSize: 22,
      fontFamily: 'Back to Black Demo',
      marginLeft: 40,
      marginTop: 10,
      textAlign: 'left',
  },
  headerText3: {
    fontSize: 22,
    fontFamily: 'Back to Black Demo',
    marginLeft: 25,
   
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
      marginTop: 50,
      width: 150,
      height: 150,
      alignSelf: 'center',
      resizeMode: 'contain',
   
      
    },
    
});