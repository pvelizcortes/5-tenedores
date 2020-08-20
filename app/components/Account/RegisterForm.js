import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

import Loading from "../Loading";
import { validateEmail } from "../../utils/validations"
import { size, isEmpty, isObject } from "lodash";
import * as firebase from "firebase";
import { useNavigation} from "@react-navigation/native";



export default function RegisterForm(props) {
  const { toastRef } = props;
  const [showPassWord, setShowPassWord] = useState(false);
  const [showRepeatPassword, setshowRepeatPassword] = useState(false);
  const [formData, setformData] = useState(defaultFormValue());
  const [loading, setloading] = useState(false);
  const navigation = useNavigation();

  const onSubmit = () => {    
    if (isEmpty(formData.email) || isEmpty(formData.password) || isEmpty(formData.repeatPassword)){      
      toastRef.current.show("Todos los campos son obligatorios.");
    }
    else if (!validateEmail(formData.email)){      
      toastRef.current.show("Ingrese un Email correcto.");
    }
    else if (formData.password !== formData.repeatPassword){      
      toastRef.current.show("Las contraseñas tienen que ser iguales.");
    }
    else if (size(formData.password) < 6){      
      toastRef.current.show("La contraseña tiene que ser al menos de 6 caracteres.");
    }
    else{
      setloading(true);
      firebase
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then(response => {
        setloading(false);
        navigation.navigate("account");
      })
      .catch(error =>{
        setloading(false);
        toastRef.current.show("El email ya está en uso, pruebe con otro.");
      })
    }
  }

  const onChange = (e, type) => {
    setformData({...formData, [type]: e.nativeEvent.text})
  }

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e,"email")}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          ></Icon>
        }
      ></Input>
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPassWord ? false : true}
        onChange={(e) => onChange(e,"password")}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassWord ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowPassWord(!showPassWord)}
          ></Icon>
        }
      ></Input>
      <Input
        placeholder="Repetir Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showRepeatPassword ? false : true}
        onChange={(e) => onChange(e,"repeatPassword")}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setshowRepeatPassword(!showRepeatPassword)}
          ></Icon>
        }
      ></Input>
      <Button
        title="Unirse"
        containerStyle={styles.containerRegister}
        buttonStyle={styles.btnRegister}
        onPress={onSubmit}
      ></Button>
      <Loading isVisible={loading} text="Creando cuenta"></Loading>
    </View>
  );
}

function defaultFormValue(){
  return{
    email:"",
    password:"",
    repeatPassword:"",
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  containerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00A680",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});
