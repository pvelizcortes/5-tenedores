import React from "react";
import { StyleSheet, View, ScrollView, Alert, Dimensions } from "react-native";
import { Icon, Avatar, Image, Input, Button } from "react-native-elements";

export default function AddRestaurantForm(props) {
  //console.log(props);

  return (
    <ScrollView style={styles.ScrollView}>
      <FormAdd></FormAdd>
    </ScrollView>
  );
}

function FormAdd(props) {
  return (
    <View style={styles.viewForm}>
      <Input
        placeholder="Nombre del Restaurante"
        containerStyle={styles.input}
      ></Input>
      <Input placeholder="Direccion" containerStyle={styles.input}></Input>
      <Input
        placeholder="Descripcion del Restaurante"
        containerStyle={styles.input}
        multiline={true}
        inputContainerStyle={styles.textArea}
      ></Input>
    </View>
  );
}

const styles = StyleSheet.create({
  ScrollView: {
    height: "100%",
  },
  viewForm: {
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    width: "100%",
    padding: 0,
    margin: 0,
  },
});
