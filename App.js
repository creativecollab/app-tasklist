import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import TaskList from "./Components/TaskList";
import TaskModal from "./Components/TaskModal";
import colors from "./config/Colors";

import data from "./Data";

export default function App() {
  const [modalActive, setModalActive] = useState(false);

  function toggleTask() {
    setModalActive(true);
  }

  function closeModal() {
    setModalActive(false);
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={modalActive}
        onRequestClose={() => closeModal()}
      >
        <TaskModal close={() => closeModal()} />
      </Modal>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          App
          <Text style={{ fontWeight: "300", color: colors.blue }}>List</Text>
        </Text>
        <View style={styles.divider} />
      </View>

      <View style={{ marginVertical: 48, alignItems: "center" }}>
        <TouchableOpacity style={styles.btnAdd} onPress={() => toggleTask()}>
          <AntDesign name="plus" size={16} color={colors.blue} />
        </TouchableOpacity>

        <Text style={styles.add}>Adicionar</Text>
      </View>

      <View style={{ height: 275, paddingLeft: 32 }}>
        <FlatList
          data={data}
          keyExtractor={item => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <TaskList list={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center"
  },

  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.black,
    paddingHorizontal: 64
  },

  btnAdd: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: colors.lightBlue,
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },

  add: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: "600",
    color: colors.blue,
    textTransform: "uppercase"
  }
});
