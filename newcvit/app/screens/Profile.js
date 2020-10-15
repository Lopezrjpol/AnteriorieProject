import React, { Component } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { isWhiteSpaceLike } from 'typescript';


class Profile extends Component {
    state = { }
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
            <View style={styles.thirdContainer}>
                <Text style={styles.design}>
            Career Objectives
          </Text>
          <Text style={styles.innerDesign}>
          To improve my knowledge and skills that I have acquired in school and make use of it in every possible way to achieve the company’s mission and vision.
          </Text>
            </View>
            <View style={styles.secContainer}>
          <Text style={styles.design}>
            Seminars & Trainings Attended
          </Text>
          <Text >{`         Digital Disruption:                                           March 07, 2020
         How Artificial Intelligence, 
         Automation Bots and Brain Work Together
         University of the East

         Cybersecurity Awareness                             March 07, 2020 
         University of the East

         Introduction to Cloud Computing             February 29, 2020
         and Test-Driven Development  
         University of the East

         Network VOIP and Telephony                   February 24, 2020 
         Rivan School of Technology

         Shifting to Cloud:                                         February 01, 2020
         A Leadership Perspective    
         of Managing Change, Risk and Impact
         University of the East`} 
          
          </Text>
      </View>
            <View style={styles.thirdContainer}>
                <Text style={styles.design}>
            Personal Information
          </Text>
          <Text style={styles.innerDesign}>{`Date of Birth: June 02, 1996            Citizenship: Filipino
Gender: Male                                       Height: 5'5 ft.
Age: 24                                                 Weight: 55 kg
Marital Status: Single
          `} </Text>
            </View>
            </View>
        </ScrollView>
        );
    }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: '#40404c',
        },
     secContainer: {
        backgroundColor: '#BFE5D9',
         borderRadius: 30,
        width: 400,
        height: 375,
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        },   
    thirdContainer: {   
        backgroundColor: '#BFE5D9',
        borderRadius: 30,
        width: 400,
        height: 125,
        marginLeft: 5,
        marginBottom: 5,
        marginTop: 5,
        },
    innerDesign: {
        marginLeft: 30,
        marginRight: 30,
        color: "black",
        },
    design: {
        marginTop: 10,
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 15,
        fontStyle: 'italic',
        color: "black",
        fontSize: 18,
        },   
    
});