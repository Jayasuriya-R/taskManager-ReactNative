import { View, Text } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

const TaskItem = ({task,desc,status }) => {
  return (
    <View>
      <Card>
        <Card.Title title={task}  />
        <Card.Content>
          <Text variant="bodyMedium">{desc}</Text>
          <Text >{status}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>
    </View>
  )
}

export default TaskItem