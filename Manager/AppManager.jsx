import { View, Text } from 'react-native'
import React, { useState } from 'react'
import HomeScreen from '../Screen/HomeScreen'
import AddTaskScreen from '../Screen/AddTaskScreen'
import { tasksData } from '../Utils/constants'
import { SafeAreaProvider } from 'react-native-safe-area-context'

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
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    )
  }
  const handleTaskDelete = (id) => {
    setTaskData((prev) =>
      prev.filter((task) => task.id !== id)
    )
  }
  return (
    <SafeAreaProvider>
      <View >
        {
          screen ? <HomeScreen taskData={taskData} handleTaskComplete={handleTaskComplete} 
          handleTaskDelete={handleTaskDelete} setScreen={setScreen} /> :
            <AddTaskScreen addNewTask={addNewTask} setScreen={setScreen} />
        }

      </View>
    </SafeAreaProvider>
  )
}

export default AppManager