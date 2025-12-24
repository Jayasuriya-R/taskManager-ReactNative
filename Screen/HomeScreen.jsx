import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import TaskItem from '../components/TaskItem'
import { Chip } from 'react-native-paper'

const HomeScreen = ({ taskData, handleTaskComplete, setScreen, handleTaskDelete }) => {
  return (
    <View style={styles.container}>
      <Chip
        onPress={() => setScreen(false)}
        icon="plus-thick"
        style={{
          marginHorizontal: 5,
          paddingVertical: 10,
          marginVertical: 5,
        }}
        textStyle={{
          fontSize: 20,
          fontWeight: 500
        }}
        
      >
        Add New Task
      </Chip>
      <FlatList
        data={taskData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item.task}
            desc={item.desc}
            isCompleted={item.isCompleted}
            handleTaskComplete={handleTaskComplete}
            handleTaskDelete={handleTaskDelete}
            id={item.id}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
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
