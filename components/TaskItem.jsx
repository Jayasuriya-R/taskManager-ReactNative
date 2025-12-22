import { View, Text } from 'react-native'
import React from 'react'
import { Button, Card, Chip } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskItem = ({ task, desc, setTaskData, isCompleted ,id}) => {
  return (
    <View style={{
      marginVertical: 5,
      marginHorizontal: 5
    }}>
      <Card>
        {isCompleted && <Chip
          icon="check"
        >
          Completed
        </Chip>}
        <Card.Title title={task} />
        <Card.Content>
          <Text variant="bodyMedium">{desc}</Text>
        </Card.Content>
        <Card.Actions style={{
          justifyContent: "flex-end"
        }}>
          <Button>Delete</Button>
          <Button onPress={setTaskData}>Complete</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

export default TaskItem