import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
const goalItem = (props) => {

    return (
        <View style={style.courseGoal}>
        <Text>{props.item}</Text>
        </View>
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