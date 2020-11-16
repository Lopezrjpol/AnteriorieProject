//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import GameScreen from './pages/GameScreen';
import InstructionScreen from './pages/Instruction';

//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    HomeScreen: { screen: HomeScreen }, 
    //First entry by default be our first screen if we do not define initialRouteName
    GameScreen: { screen: GameScreen }, 

    InstructionScreen: { screen: InstructionScreen }, 
  }, 
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);
export default createAppContainer(App);