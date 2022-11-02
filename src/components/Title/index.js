import React from 'react';
import { StyleSheet, View , Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default Title = () => {
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.title}>Calculadora IMC</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    boxTitle : {
        marginTop: 30
    },  

    title : {
        fontSize: RFPercentage(3),
    }
})