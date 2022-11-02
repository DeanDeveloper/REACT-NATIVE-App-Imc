import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';

export default Form = () => {


    const [valueAltura, setValueAltura] = useState(0);
    const [valueAPeso, setValuePeso] = useState(0);
    const [result, setResult] = useState(0);



    const Calcular = (peso, altura) => {
        let resultado = 0;
        let situacao = '';

        if (peso == '' || altura == '') {
            return false;
        } else {
            resultado = peso / ((altura).replace(',', '.') * (altura).replace(',', '.'));


            if (resultado < 16) {
                situacao = 'Magreza Grave';
            } else if (resultado == 18.5 || resultado < 25) {
                situacao = 'Saudável';
            } else if (resultado == 25 || resultado < 30) {
                situacao = 'Sobrepeso';
            } else if (resultado > 40) {
                situacao = 'Obesidade';
            }

            console.log(resultado)

        }

        setResult(`IMC: ${resultado.toFixed(2).replace('.', ',')} -- SITUAÇÃO: ${situacao}`)

    }





    return (
        <View style={styles.form}>
            <View style={styles.container}>
                <Text style={styles.text}>Altura:</Text>
                <TextInput placeholder='Ex. 1.75' style={styles.inputs} keyboardType='numeric' onChangeText={(a) => setValueAltura(a)} />

                <Text style={[styles.text, { marginTop: 30 }]}>Peso:</Text>
                <TextInput placeholder='Ex. 80Kg' style={styles.inputs} keyboardType='numeric' onChangeText={(p) => setValuePeso(p)} />

                <View style={styles.contentResult}>
                    <Text style={styles.textResult}>{result}</Text>
                </View>
            </View>



            <View style={styles.contentButton}>
                <TouchableOpacity style={styles.touchButton} onPress={() => { Calcular(valueAPeso, valueAltura) }} >
                    <Text style={styles.textButton} title="Calcular IMC" >Calcular</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        padding: 30,
        borderWidth: .4,
        borderColor: '#8800ff',
        borderRadius: 8,
        marginTop: 20,
    },

    text: {
        fontSize: 18,
        color: 'gray'
    },

    contentResult: {
        padding: 10,
        marginTop: 20,
    },

    textResult: {
        fontSize: 16,
        color: '#09ad34'
    },

    form: {
        width: '100%'
    },

    touchButton: {
        borderWidth: .4,
        borderColor: '#8800ff',
        padding: 14,
        borderRadius: 6
    },

    contentButton: {
        marginTop: 20,
    },

    textButton: {
        textAlign: 'center',
        color: '#8800ff',
        fontSize: 20,
        fontWeight: 'bold'
    },

    inputs: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightblue',
        padding: 8
    }

})