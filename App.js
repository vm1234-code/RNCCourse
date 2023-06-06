import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';

import { useState } from 'react';

import GoalItem from './components/GoalItem';



export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...courseGoals, 
      {text: enteredGoalText, key: Math.random().toString() },
    ]);
  }
  
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' 
        onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoals} 
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} />;
          }}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal:16
  },
  inputContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding:8
  },
  goalsContainer: {
    flex: 5
  },

});
