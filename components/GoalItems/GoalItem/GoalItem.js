import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
const goalItem = (props) => {

    return (
        <TouchableOpacity activeOpacity='0.8' onPress={() =>{props.onDelete(props.goal.item.key)}}>
            <View style={style.courseGoal}>
                <Text>{props.goal.item.value}</Text>
            </View>
        </TouchableOpacity>

    );
}

const style = StyleSheet.create({
    courseGoal: {
        padding: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: 'salmon'
    }
})

export default goalItem;