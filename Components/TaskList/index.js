import React from "react";

import {
  TaskContainer,
  TaskTitle,
  TaskWrapper,
  TaskColumn,
  TaskSubtitle,
  TaskCount
} from "./styles";

function TaskList({ list }) {
  const taskCompleted = list.tasks.filter(task => task.completed).length;
  const tastReimaning = list.tasks.length - taskCompleted;
  return (
    <TaskContainer style={{ backgroundColor: list.color }}>
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
  );
}

export default TaskList;
