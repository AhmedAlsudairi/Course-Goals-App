import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const goalItems = (props) => {

    return (
             <Modal visible={props.modal} animationType='slide'>
            <View style={style.inputContainer}>
            <TextInput placeholder="Course Goal" style={style.input} onChangeText={props.changeHandler} value={props.text} />
            <Button title="Add+" onPress={()=>{props.addHandler(); props.toggle()}}/>
        </View>
        </Modal>
       

    )
}

const style = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: "column", 
        flex: 1,
        justifyContent: "center", 
        alignItems: "center"
    },
    input: {
        borderWidth: 1, 
        padding: 6, 
        width: "80%", 
        borderRadius: 5,
        marginBottom: 10
    }
})
export default goalItems;