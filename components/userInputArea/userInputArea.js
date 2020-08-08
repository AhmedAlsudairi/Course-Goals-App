import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const goalItems = (props) => {

    return (
        <Modal visible={props.modal} animationType='slide'>
            <View style={style.inputContainer}>
                <TextInput placeholder='Course Goal' style={style.input} onChangeText={props.changeHandler} value={props.text} />
                <View style={style.buttons}>
                    <View style={style.add}>
                        <Button style={style.button} title='ADD' color='white' onPress={() => { props.addHandler(); props.toggle() }} />
                    </View>
                    <View style={style.cancel}>
                        <Button title='CANCEL' onPress={props.toggle} color='white' />
                    </View>

                </View>
            </View>
        </Modal>


    )
}

const style = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        padding: 6,
        width: '80%',
        borderRadius: 5,
        marginBottom: 10
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%'
    },
    add: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: 'blue'
    },
    cancel: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: 'red'
    }
})
export default goalItems;