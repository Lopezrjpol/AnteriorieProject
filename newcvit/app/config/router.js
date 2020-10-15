import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../screens/Profile';
import Educ from '../screens/Educ';
import Skills from '../screens/Skills';
import React, { Component } from "react";
import { View, Text, StyleSheet, Image} from 'react-native';



const Tabs = createMaterialTopTabNavigator({
        Profile : {
            screen : Profile,
            navigationOptions : {
                tabBarLabel : ({}) => (
                    <View>
                        <Text style = {{ fontStyle: "italic" , color : "white"}}>Profile</Text>
                    </View>
                
                ),
            },
        },
        Educ : {
            screen : Educ,
            navigationOptions : {
                tabBarLabel : ({})=> (
                    <View>
                        <Text style = {{ fontStyle: "italic", color : "white"}}>Education</Text>
                    </View>
                
                ),
            },
        },
        Skills : {
            screen : Skills,
            navigationOptions : {
                tabBarLabel : ({})=> (
                    <View>
                        <Text style = {{ fontStyle: "italic", color : "white"}}>Skills & Abilities</Text>
                    </View>
                
                ),
            },
        },
    },
    {
        initialRouteName : "Profile",
        lazyLoad : true,
        tabBarPosition : "top",
        swipeEnabled : true,
        tabBarOptions : {
            
            style : {
                height : 50,
                backgroundColor : "#40404c",
                
                
            },
            indicatorStyle : {
                backgroundColor : "#E5E5E7",
                elevation : 10,
              
            },
            activeTintColor : 'white',
            inactiveTintColor : "white",
           
        },
    },
);

const MainScreenNavigator = createStackNavigator({
    Tabs : {
        screen: Tabs,
        navigationOptions : {
            title: 'RJ PATRICK O. LOPEZ ',
            headerTitleAlign : {
                alignContent : "center",
                alignItems : "center",
                justifyContent : "center",
            
            },
            headerStyle : {
                backgroundColor: '#BFE5D9',
                height: 50,
                
            },
            headerTitleStyle : {
                color : "black",
                fontSize : 20,
                
            },
    },
},
});

export default createAppContainer(MainScreenNavigator);

const styles = StyleSheet.create({
    iconContainer : {
      justifyContent : "center",
      alignItems : "center",
      alignContent : "center",
    },
  
});