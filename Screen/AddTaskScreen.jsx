import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Chip, Button } from 'react-native-paper'


const AddTaskScreen = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
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
      <Button mode="contained">Save Task</Button>
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