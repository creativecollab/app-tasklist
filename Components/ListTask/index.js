import React, { useState } from "react";

import {
  Container,
  BtnClose,
  Section,
  Title,
  Count,
  Footer,
  Input
} from "./styles";

import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from "./../../config/Colors";

import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default function ListTask({ close, list }) {
  const [name, setName] = useState(list.name);
  const [color, setColor] = useState(list.color);
  const [tasks, setTasks] = useState(list.tasks);

  const taskCount = tasks.length;
  const taskCompleted = tasks.filter(task => task.completed).length;

  function renderList(task) {
    return (
      <View
        style={{
          paddingVertical: 16,
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <TouchableOpacity>
          <Ionicons
            style={{ width: 32 }}
            size={24}
            name={task.completed ? "ios-square" : "ios-square-outline"}
            color={colors.gray}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: task.completed ? colors.gray : colors.black,
            fontSize: 18,
            fontWeight: "700",
            textDecorationLine: task.completed ? "line-through" : "none"
          }}
        >
          {task.title}
        </Text>
      </View>
    );
  }
  return (
    <Container>
      <BtnClose onPress={close}>
        <AntDesign name="close" size={32} color={colors.black} />
      </BtnClose>

      <Section
        style={{
          borderBottomColor: color,
          justifyContent: "flex-end",
          marginLeft: 64,
          borderBottomWidth: 2
        }}
      >
        <Title>{name}</Title>
        <Count>
          {taskCompleted} DE {taskCount} TAREFAS
        </Count>
      </Section>

      <Section style={{ flex: 1 }}>
        <FlatList
          data={tasks}
          keyExtractor={item => item.title}
          renderItem={({ item }) => renderList(item)}
          contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 64 }}
          showsHorizontalScrollIndicator={false}
        />
      </Section>

      <Footer style={{ paddingHorizontal: 32 }} behavior="padding">
        <Input style={{ borderColor: color }} />
        <TouchableOpacity
          style={{
            borderRadius: 16,
            padding: 16,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: color
          }}
        >
          <AntDesign name="plus" size={16} color="#FFF" />
        </TouchableOpacity>
      </Footer>
    </Container>
  );
}
