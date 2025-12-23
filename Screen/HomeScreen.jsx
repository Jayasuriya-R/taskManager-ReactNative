import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import TaskItem from '../components/TaskItem'

const HomeScreen = ({ taskData, handleTaskComplete }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Home Screen</Text>

      <FlatList
        data={taskData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item.task}
            desc={item.desc}
            isCompleted={item.isCompleted}
            handleTaskComplete={handleTaskComplete}
            id={item.id}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
                  
  },
  header: {
    fontSize: 30,
    fontWeight: '600',     
    textAlign: 'center',   
    marginVertical: 10,
  },
})
