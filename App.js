import React, { useState } from 'react';
import { StyleSheet,View,Button} from 'react-native';
import GoalItems from './components/GoalItems/GoalItems';
import UserInputArea from './components/userInputArea/userInputArea';

export default function App() {
  const [enteredText, setEnteredText] = useState({key:Math.random().toString(), value:''});
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible,setModalVisible] = useState(false);
  const textInputHandler = (text) => {
    setEnteredText(text);
  }

  const addGoalHandler = () => {
    if(enteredText.value == ''){
      return;
    }
    setCourseGoals((prevCourseGoals) => [...prevCourseGoals, {value:enteredText, key: Math.random().toString()}])
    setEnteredText({key:Math.random().toString(), value:''});
  }

  const deleteGoalHandler = (key) => {
    setCourseGoals((prevCourseGoals)=>{
      return courseGoals.filter((goal)=> goal.key !== key)
    })
  }

  const modalToggle = () => {
      setModalVisible((prev)=> !prev);
  }

  return (

      <View style={style.screen}>
        <View style={style.add}>
          <Button onPress={modalToggle} title='Add New Goal' color='white'/>
        </View>
        <UserInputArea 
        changeHandler={textInputHandler} 
        addHandler={addGoalHandler} 
        text={enteredText.value}
        modal={modalVisible}
        toggle={modalToggle}/>
        <View>
        <GoalItems 
        goals={courseGoals} 
        deleteHandler={(key)=>{deleteGoalHandler(key)}}/>
        </View>
      </View>
    

  );
}

const style = StyleSheet.create({
  screen: {
    padding: 50,
  },
  add: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'blue'
    
}
})