import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import { validateEmail } from "../../utils/validations";

export default function ChangeEmailForm(props) {
  const { email, setShowMoadl, toastRef, setReloadUserInfo } = props;
  const [formData, setFormData] = useState(defaultValue());
  const [showPassword, setShowPassword] = uSeState(false);
  const [errors, setErrors] = useState({});

  const onChange = (e, type) => {
    setErrors({});
    if (!formData.email || email === formData.email) {
      setErrors({
        email: "El email no ha cambiado.",
      });
    } else if (!validateEmail(formData.email)) {
      setErrors({
        email: "Email incorrecto.",
      });
    } else if (!formData.password) {
      setErrors({
        password: "La contraseña no puede estar vacía",
      });
    } else {
      console.log("todo Ok");
    }
  };

  const onSubmit = () => {
    // setError(null);
    // if (!newDisplayName) {
    //   setError("El email no puede estar vacio");
    // } else if (displayName === newDisplayName) {
    //   setError("El email no puede ser igual al actual.");
    // } else {
    //   setIsLoading(true);
    //   const update = {
    //     displayName: newDisplayName,
    //   };
    //   firebase
    //     .auth()
    //     .currentUser.updateProfile(update)
    //     .then(() => {
    //       setIsLoading(false);
    //       setReloadUserInfo(true);
    //       setshowModal(false);
    //     })
    //     .catch(() => {
    //       setError("Error al actualizar el nombre,");
    //       setIsLoading(false);
    //     });
    // }
  };

  return (
    <View style={styles.view}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.input}
        rightIcon={{
          type: "material-community",
          name: "at",
          color: "#c2c2c2",
        }}
        onChange={(e) => setnewDisplayName(e.nativeEvent.text)}
        errorMessage={errors.email}
      ></Input>
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={showPassword ? false : true}
        rightIcon={{
          type: "material-community",
          name: showPassword ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: () => setShowPassword(!showPassword),
        }}
        onChange={() => onChange(e, "password")}
        errorMessage={errors.password}
      ></Input>
      <Button
        title="Cambiar email"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={onsubmit}
        loading={isLoading}
      ></Button>
    </View>
  );
}

function defaultValue() {
  return {
    email: "",
    password: "",
  };
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    marginBottom: 10,
  },

  btnContainer: {
    marginTop: 20,
    width: "95%",
  },
  btn: {
    backgroundColor: "#00A680",
  },
});
