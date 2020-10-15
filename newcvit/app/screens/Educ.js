import React, { Component } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';


class Educ extends Component {
    state = { }
    render() {
        return (
        <ScrollView>
            <View style={styles.container}>
                
                <View style={styles.secContainer}>
                    <Text style={styles.innerDesign}>
                    Tertiary Education
                     </Text>
                    <Text style={styles.design}>{`University of the East - Manila 
Bachelor of Science Major in Computer Engineering
2219 Recto Ave, Sampaloc, Manila, 1008 Metro Manila
June 2015 - Present`}
                    </Text>
                </View>
            
                <View style={styles.secContainer}>
                    <Text style={styles.innerDesign}>
                    Secondary Education
                    </Text>
                    <Text style={styles.design}>
                {`Our Lady of Perpetual Help School 
28 Mejico Street, Pasig, 1800 Kalakhang Maynila
June 2009 - March 2013`}
                    </Text>
                </View>

                <View style={styles.secContainer}>
                    <Text style={styles.innerDesign}>
                    Primary Education
                    </Text>
                    <Text style={styles.design}>
                {`Our Lady of Perpetual Help School 
28 Mejico Street, Pasig, 1800 Kalakhang Maynila
June 2003 - March 2009`}
                    </Text>
                </View>

                <View style={styles.secContainer}>
                    <Text style={styles.innerDesign}>
                    Organizations 
                    </Text>
                    <Text style={styles.design}>
                    University of the East-Society of Computer Engineering
                    2015-Present
                    </Text>
                </View>

            </View>
        </ScrollView>   
        );
    }
}

export default Educ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#40404c',
       },
       secContainer: {   
        backgroundColor: '#BFE5D9',
        borderRadius: 30,
        width: 400,
        height: 130,
        marginLeft: 5,
        marginBottom: 5,
        marginTop: 5,
        },
    innerDesign: {
        marginTop: 10,
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 15,
        fontStyle: 'italic',
        color: "black",
        fontSize: 18,
        }, 
    design: {
        marginLeft: 30,
        marginRight: 30,
        color: "black",
        },
});