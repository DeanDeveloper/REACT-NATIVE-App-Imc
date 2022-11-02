import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Form from '../Form';


export default Main = () => {
    return (
        <View style={styles.container}>
            <Form/>
        </View>
    )
}

const styles = StyleSheet.create({

    container : {
        width: '100%',
        padding : 20,
        justifyContent: 'center',
    },

})