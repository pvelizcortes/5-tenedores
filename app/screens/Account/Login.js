import React, {useRef} from "react";
import { StyleSheet, ScrollView, Image, View, Text } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import LoginForm from "../../components/Account/LoginForm";


export default function Login() {
  const toastRef = useRef();
  
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
        resizeMode="contain"
        style={styles.logo}
      ></Image>
      <View style={styles.viewContainer}>
        <LoginForm  toastRef={toastRef}></LoginForm>
        <CreateAccount></CreateAccount>
      </View>
      <Divider style={styles.divider}></Divider>      
      <Toast ref={toastRef} position="center" opacity={0.9}></Toast>
    </ScrollView>
  );
}

function CreateAccount() {
  const navigation = useNavigation();
  return (
    <Text style={styles.textRegister}>
      ¿Aun no tienes una cuenta?{" "}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("register")}
      >
        Regístrate
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: "#00A680",
    fontWeight: "bold",
  },
  divider: {
    backgroundColor: "#00A680",
    margin: 40,
  },
});
