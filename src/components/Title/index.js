import React from 'react';
import { StyleSheet, View , Text } from 'react-native';

export default Title = () => {
    return (
        <View>
            <Text style={styles.text}>Bit Health</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text : {
        fontSize: 32
    }
})