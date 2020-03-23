import React, { useState } from "react";

import {
  Container,
  BtnClose,
  Wrapper,
  Title,
  Input,
  BtnCreate,
  BtnCreateText,
  ColorsWrapper,
  Colors
} from "./styles";

import dados from "./../../Data";

import { AntDesign } from "@expo/vector-icons";
import colors from "./../../config/Colors";

export default function TaskModal({ close }) {
  const bgColors = ["#dddddd", "#eeeeee", "#ebebeb", "#d9c1e3", "#000000"];
  const [name, setName] = useState();
  const [color, setColor] = useState(bgColors[0]);

  function createTask() {
    dados.push({
      name,
      color,
      tasks: []
    });
    setName();
    close();
  }

  function renderColors() {
    return bgColors.map(color => (
      <Colors
        key={color}
        style={{ backgroundColor: color }}
        onPress={() => setColor(color)}
      />
    ));
  }

  return (
    <Container behavior="padding">
      <BtnClose onPress={close}>
        <AntDesign name="close" size={24} color={colors.black} />
      </BtnClose>

      <Wrapper>
        <Title>CRIAR TAREFA</Title>
        <Input
          placeholder="Digite sua Tarefa "
          placeholderTextColor={colors.lightBlue}
          onChangeText={t => setName(t)}
        />

        <ColorsWrapper>{renderColors()}</ColorsWrapper>

        <BtnCreate
          onPress={() => createTask()}
          style={{ backgroundColor: color }}
        >
          <BtnCreateText>Criar</BtnCreateText>
        </BtnCreate>
      </Wrapper>
    </Container>
  );
}
