import React, { useState } from 'react';
import { StyleSheet,View} from 'react-native';
import GoalItems from './components/GoalItems/GoalItems';
import UserInputArea from './components/userInputArea/userInputArea';

export default function App() {
  const [enteredText, setEnteredText] = useState({});
  const [courseGoals, setCourseGoals] = useState([]);

  const textInputHandler = (text) => {
    setEnteredText(text);
  }

  const addCourseHandler = () => {
    setCourseGoals((prevCourseGoals) => [...prevCourseGoals, {value:enteredText, key: Math.random().toString()}])
  }
  return (
    
      <View style={style.screen}>
        <UserInputArea changeHandler={textInputHandler} addHandler={addCourseHandler} text={enteredText.value}/>
        <View>
        <GoalItems goals={courseGoals}/>
        </View>
      </View>
    

  );
}

const style = StyleSheet.create({
  screen: {
    padding: 50
  }
})