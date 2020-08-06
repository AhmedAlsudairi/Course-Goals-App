import React from 'react';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View>
        <TextInput placeholder="Course Goal" style={{borderWidth:1, padding: 6}} />
        <Button title="Add+"/>
      </View>
      <View>

      </View>
    </View>
  );
}
