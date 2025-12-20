import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { tasksData } from '../Utils/constants'
import TaskItem from '../components/TaskItem'

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>

      <FlatList
        data={tasksData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item.task}
            desc={item.desc}
            status={item.status}
          />
        )}
      />


    </View>
  )
}

export default HomeScreen 