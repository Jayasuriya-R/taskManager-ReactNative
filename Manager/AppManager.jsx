import { View, Text } from 'react-native'
import React, { useState } from 'react'
import HomeScreen from '../Screen/HomeScreen'
import AddTaskScreen from '../Screen/AddTaskScreen'
import { Button } from 'react-native-paper'

const AppManager = () => {
    const [screen, setScreen] = useState(true)
  return (
    <View >
      {
        screen ? <HomeScreen /> : <AddTaskScreen/>
      }

      <Button  onPress={()=> setScreen(!screen)}>{screen ? "Add Task" : "Home"}</Button>
    </View>
  )
}

export default AppManager