import React, { useState } from "react";
import { Modal } from "react-native";
import {
  TaskContainer,
  TaskTitle,
  TaskWrapper,
  TaskColumn,
  TaskSubtitle,
  TaskCount,
  Container
} from "./styles";

import ListTask from "./../ListTask";

function TaskList({ list }) {
  const taskCompleted = list.tasks.filter(task => task.completed).length;
  const tastReimaning = list.tasks.length - taskCompleted;

  const [showListTask, setShowListTask] = useState(false);

  function toggleListTask() {
    return setShowListTask(!showListTask);
  }

  return (
    <Container>
      <Modal
        animationType="fade"
        visible={showListTask}
        onRequestClose={() => toggleListTask()}
      >
        <ListTask list={list} close={() => toggleListTask()} />
      </Modal>
      <TaskContainer
        onPress={() => toggleListTask()}
        style={{ backgroundColor: list.color }}
      >
        <TaskTitle numberOfLines={1}>{list.name}</TaskTitle>

        <TaskWrapper>
          <TaskColumn>
            <TaskCount>{tastReimaning}</TaskCount>
            <TaskSubtitle>Restantes</TaskSubtitle>
          </TaskColumn>

          <TaskColumn>
            <TaskCount>{taskCompleted}</TaskCount>
            <TaskSubtitle>Completas</TaskSubtitle>
          </TaskColumn>
        </TaskWrapper>
      </TaskContainer>
    </Container>
  );
}

export default TaskList;
