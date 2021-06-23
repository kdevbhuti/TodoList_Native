import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import Task from "./Components/Tasks/index" 

export default function App() {
  const [task, setTask] = React.useState("");
  const [taskItems, setTaskItems] = React.useState([]);
  
  const handleAddTasks = () =>{
    if(task !== ""){
      setTaskItems([...taskItems, task]);
    }
    setTask("");
  }
  return (
    <View style={styles.container}>
      
        <Text style={styles.todoHead}>Tasks</Text>
        <ScrollView style={styles.scrollView}>
        <View style={styles.todoList}>
          {
            taskItems.map((item, index) => {
              return <Task key={index} task={item}/>
            })
          } 
        </View>
      </ScrollView>
      <StatusBar style="auto" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={styles.inputWapper}
      >
        <TextInput style={styles.inputTodo} placeholder={"Enter Todo"} value={task} onChange={event => setTask(event.nativeEvent.text)}></TextInput>
        <TouchableOpacity style={styles.addTodo} onPress={() => handleAddTasks()}>
          <View>
            <Text style={styles.addTodoPluce}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  todoHead:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 5,
    paddingHorizontal: 20
  },
  inputWapper:{
    position:'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  inputTodo:{
    padding: 10,
    width:250,
    backgroundColor: "#FFFFFF",

    borderRadius: 20,
    paddingHorizontal: 15,
    borderColor: '#C0C0C0',
    borderWidth: 1
    
  },
  addTodo:{
    backgroundColor: "#FFFFFF",
    color: "#0087EF",
    borderRadius: 50
  },
  addTodoPluce:{
    fontSize: 30,
    paddingHorizontal:15,
    paddingVertical: 4,
    color: '#008AEE'
  },
  scrollView: {
    marginBottom: 80,
  }
});
