import { View, Text } from 'react-native'
import React, { useState } from 'react'
import HomeScreen from '../Screen/HomeScreen'
import AddTaskScreen from '../Screen/AddTaskScreen'
import { tasksData } from '../Utils/constants'
import { Button } from 'react-native-paper'

const AppManager = () => {
  const [screen, setScreen] = useState(true)
  const [taskData, setTaskData] = useState([...tasksData])
  const addNewTask = (newTask) => {
    console.log(newTask)
    setTaskData((prev) => [...prev, newTask])
  }
  const handleTaskComplete = (id) => {
    setTaskData((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, isCompleted: true }
          : task
      )
    )
  }
  return (
    <View >
      {
        screen ? <HomeScreen taskData={taskData} handleTaskComplete={handleTaskComplete} /> : <AddTaskScreen addNewTask={addNewTask} />
      }

      <Button onPress={() => setScreen(!screen)}>{screen ? "Add Task" : "Home"}</Button>
    </View>
  )
}

export default AppManager