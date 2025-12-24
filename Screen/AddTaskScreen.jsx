import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Chip, Button, Appbar } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'


const AddTaskScreen = ({ addNewTask, setScreen }) => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const handleSave = () => {
    if (title.trim() === "" || desc.trim() === "") {
      return alert("Fill both title and description");
    }
    const newTask = {
      task: title, desc, isCompleted: false, createdAt: new Date().toLocaleDateString(), id: Date.now()
    }
    addNewTask(newTask)
    setTitle('')
    setDesc('')
    setScreen(true)
  }
  return (

    <View style={{ marginTop: 20, marginHorizontal: 10 }}>

      <Appbar.Header>
        <Appbar.BackAction onPress={() => setScreen(true)} />
        <Appbar.Content title="Add New Task" />
      </Appbar.Header>
      <TextInput style={styles.input}
        mode='outlined'
        label="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput style={[styles.input, { height: 70 }]}
        multiline
        mode='outlined'
        label="Description"
        numberOfLines={5}
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
  header: {
    fontSize: 20,
    fontWeight: 700,
    margin: 'auto'
  }
})