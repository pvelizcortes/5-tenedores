import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function UserGuest() {
  const navigation = useNavigation();

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require("../../../assets/img/user-guest.jpg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.title}>Consulta tu perfil de 5 Tenedores</Text>
      <Text style={styles.description}>
        ¿Como descirbirías tu mejor restaurante? Busca y vusaliza los mejores
        restaurantes.
      </Text>
      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer} // << El estido del contenedor del button
          title="Ver tu perfil"
          onPress={() => navigation.navigate("login")}
        ></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
  btnStyle: {
    backgroundColor: "#00A680",
  },
  btnContainer: {
    width: "70%",
  },
});
