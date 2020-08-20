import React, { useRef} from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// Para que al abrir el teclado siempre se vea el input //
import Toast from "react-native-easy-toast";

import RegisterForm from "../../components/Account/RegisterForm";

export default function Register() {
const toastRef = useRef();
  return (
    // KeyboardAwareScrollView para que el input siempre se vea al abrir el teclado
    <KeyboardAwareScrollView> 
      <Image
        source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
        resizeMode="contain"
        style={styles.logo}
      ></Image>
      <View style={styles.viewForm}>
        <RegisterForm toastRef={toastRef}></RegisterForm>
      </View>
      <Toast ref={toastRef} position="center" opacity={0.9}></Toast>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40,
  },
});
