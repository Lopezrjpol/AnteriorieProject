import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';


class Skills extends Component {
    state = { }
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.secContainer}>
                <Text style={styles.design}>
            Skills & Abilities
                </Text>
                <Text style={styles.innerDesign}>{`       • Exposed in programming fundamentals in: C++,       
          HTML, PHP, Java, Database Systems, and 
          Python.
       • Skilled in Computer Hardware and Software
       • Skilled in Cisco Packet Tracer
       • Hardworking
       • Willingness to learn
       • Adaptability`} 
                </Text>
            </View>

            <View style={styles.thirdContainer}>
                <Text style={styles.design}>
            Language
          </Text>
          <Text style={styles.innerDesign}>{`         • English
         • Filipino
          `} </Text>
            </View>
        </View>
        );
    }
}

export default Skills;

const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: '#40404c',
        },
    secContainer: {   
        backgroundColor: '#BFE5D9',
        borderRadius: 30,
        width: 400,
        height: 200,
        marginLeft: 5,
        marginBottom: 5,
        marginTop: 5,
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
    innerdesign: {
        marginLeft: 30,
        marginRight: 30,
        color: "black",
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
});