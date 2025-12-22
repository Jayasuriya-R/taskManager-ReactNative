import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { tasksData } from '../Utils/constants'
import TaskItem from '../components/TaskItem'
import { Button } from 'react-native-paper'

const HomeScreen = () => {
  const [taskData, setTaskData] = useState([...tasksData])
  const handleClick = ()=>{
    alert("Complete the task")
  }
  return (
    <View>
      <Text style={{
        fontSize: 30,
        fontWeight:600,
        marginVertical: 10,
        margin: "auto",
      }}>Home Screen</Text>
    

     {taskData.length !==0 &&  <FlatList
        data={taskData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item.task}
            desc={item.desc}
            status={item.status}
            isCompleted={item.isCompleted}
            setTaskData={handleClick}
            id={item.id}
          />
        )}
      />}


    </View>
  )
}

export default HomeScreen 