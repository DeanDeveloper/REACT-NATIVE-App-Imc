import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';

export default Form = () => {
    return (
        <View style={styles.form}>
            <View style={styles.container}>
                <Text style={styles.text}>Altura:</Text>
                <TextInput placeholder='Ex. 1.75' style={styles.inputs} keyboardType='numeric' />
                <Text style={[styles.text, { marginTop: 30 }]}>Peso:</Text>
                <TextInput placeholder='Ex. 80Kg' style={styles.inputs} keyboardType='numeric' />
            </View>
            <View style={styles.contentButton}>
                <TouchableOpacity ><Button style={styles.button}  title="Calcular IMC" /></TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#d4d4d4',
        borderRadius: 8,
        marginTop: 20,
    },

    text: {
        fontSize: 20
    },

    form: {
        width: '100%'
    },

    contentButton : {
        marginTop: 20,
    },

    button: {
        height: 50,
        borderRadius: 6
    },

    inputs: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightblue',
        padding: 8
    }

})