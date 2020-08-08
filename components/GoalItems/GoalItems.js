import React from 'react';
import {FlatList} from 'react-native';
import GoalItem from './GoalItem/GoalItem';

const goalItems = (props) => {

    return (
        <FlatList 
          data={props.goals} 
          renderItem={(goal) => <GoalItem item={goal.item.value}/>}
           />
    )
}

export default goalItems;