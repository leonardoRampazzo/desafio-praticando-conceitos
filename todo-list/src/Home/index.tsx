import React, { useState } from "react";
import { FlatList, Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import { styles } from "./style";

import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';


type task = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  completedAt: Date;
};

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
      completedAt: new Date(),
    };

    setTaskList((prevstate) => [...prevstate, task]);
    setTitle("");
  };

  const removeTask = (id: number) => {
    setTaskList((prevstate) => prevstate.filter((task) => task.id !== id));
  };

  const completeTask = (id: number) => {
    setTaskList((prevstate) =>
      prevstate.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
          task.updatedAt = new Date();
          task.completedAt = task.completed ? new Date() : new Date(0);
        }
        return task;
      })
    );
  };

  const created = () => taskList.length;

  const completed = () => taskList.filter((task) => task.completed).length;

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign name="rocket1" size={30} color="#4ea8de" style={{ transform: [{ rotate: '-45deg' }] }} />
          <Text style={styles.titleTo}>to</Text>
          <Text style={styles.titleDo}>do</Text>
        </View>
      </View>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={title}
          onChangeText={setTitle}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <AntDesign style={styles.addButtonText} name="pluscircleo" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.counters}>
          <View>
            <Text style={styles.createdText}>
              Criadas <Text>{created()}</Text>
            </Text>
          </View>
          <View>
            <Text style={styles.completedText}>
              Concluídas <Text>{completed()}</Text>
            </Text>
          </View>
        </View>

        <FlatList
          data={taskList}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyTextBold}>
                Você ainda não tem tarefas cadastradas{'\n'}
              </Text>
              <Text style={styles.emptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <TouchableOpacity onPress={() => completeTask(item.id)} style={{ marginRight: 8 }}>
                {item.completed ? (
                  //<Text style={{ color: "#5E60CE", fontWeight: "bold" }}>✔</Text>
                  <AntDesign  style={{ color: "#5E60CE", fontWeight: "bold" }} name="checkcircle" size={24} color="black" />
                ) : (
                   //<View style={styles.checkCircle} />
                   <Entypo name="circle" size={24} color="#4EA8DE" />
                )}
              </TouchableOpacity>

              <Text style={item.completed ? styles.taskTextCompleted : styles.taskText}>
                {item.title}
              </Text>

              <TouchableOpacity onPress={() => removeTask(item.id)} style={styles.trashButton}>
                {/* <Text style={styles.trashText}>🗑️</Text> */}
                <Feather name="trash-2" size={24} color="#808080" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}
