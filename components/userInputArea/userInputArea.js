import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
const goalItems = (props) => {

    return (
        <View style={style.inputContainer}>
            <TextInput placeholder="Course Goal" style={style.input} onChangeText={props.changeHandler} value={props.text} />
            <Button title="Add+" onPress={props.addHandler} />
        </View>
    )
}

const style = StyleSheet.create({
    inputContainer: {
        display: 'flex', flexDirection: "row", justifyContent: "space-between", alignItems: "center"
    },
    input: {
        borderWidth: 1, padding: 6, width: "80%", borderRadius: 5
    }
})
export default goalItems;