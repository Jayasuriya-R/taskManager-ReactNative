import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Chip, Button } from 'react-native-paper'


const AddTaskScreen = ({addNewTask}) => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const handleSave = ()=>{
    console.log("save clicked")
    if(title.trim() !== "" || desc.trim() !== ""){
      return alert("Fill both title and description")
    }
    const newTask = {
      task:title,desc,isCompleted:false,createdAt: new Date().toLocaleDateString(),id: Date.now()
    }
    addNewTask(newTask)
    setTitle('')
    setDesc('')
  }
  return (
    <View style={{ marginTop: 20, marginHorizontal: 10 }}>
      <Text
         style={styles.header}>Add New Task</Text>
      <TextInput style={styles.input}
      mode='outlined'
        label="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput style={styles.input}
        multiline
        mode='outlined'
        label="Description"
        value={desc}
        onChangeText={text => setDesc(text)}
      />
      <Button mode="contained" onPress={handleSave}>Save Task</Button>
    </View>
  )

}

export default AddTaskScreen

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,

  },
  header:{
    fontSize:20,
    fontWeight:700,
    margin:'auto'
  }
})