import React, { useState } from "react";

import { FlatList, Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./style";

type task = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  completedAt: Date;
}

export default function Home() {
  const [title, setTitle] = useState<string>("");
  const [taskList, setTaskList] = useState<task[]>([]);

  const addTask = () => {
    let idNew = taskList.length + 1;

    let task = {
      id: idNew,
      title: title,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      completedAt: new Date()
    }

    setTaskList(prevstate => [...prevstate, task]);
    setTitle("");
  }

  const removeTask = (id: number) => {
    setTaskList(prevstate => prevstate.filter(task => task.id !== id));
  }  

  const completeTask = (id: number) => {
    setTaskList(prevstate => prevstate.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
        task.updatedAt = new Date();
        if (task.completed) {
          task.completedAt = new Date();
        } else {
          task.completedAt = new Date(0);
        }
      }
      return task;
    }));
  }

  const created = () => {
    let count = taskList.length;
    return count;
  }

  const completed = () => {
    let count = taskList.filter(task => task.completed === true).length;
    return count;
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput placeholder="Task Title" value={title} onChangeText={setTitle} />
        <TouchableOpacity onPress={addTask }>
          <Text> + </Text>
        </TouchableOpacity>
      </View>

      <View >
        <Text> Criadas {created()} </Text>
      </View>

      <View >
        <Text> Concluidas {completed()} </Text>
      </View>


      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={() => completeTask(item.id)}>
              {item.completed ? <Text> (V) </Text> : <Text> ( ) </Text>}
            </TouchableOpacity>
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => removeTask(item.id)}>
              <Text> - </Text>
            </TouchableOpacity>
          </View>
        )} />
    </View>
  )
}