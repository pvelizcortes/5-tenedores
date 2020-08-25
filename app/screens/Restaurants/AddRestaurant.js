import React, { useState, useRef } from "react";
import { View, Text } from "react-native";
import Toast from "react-native-easy-toast";
import Loading from "../../components/Loading";
import AddRestaurantForm from "../../components/Restaurants/AddRestaurantForm";

export default function AddRestaurant(props) {
  //console.log(props);
  const { navigation } = props;
  const [isLoading, setisLoading] = useState(false);
  const toastRef = useRef();

  return (
    <View>
      <AddRestaurantForm
        toastRef={toastRef}
        setisLoading={setisLoading}
        navigation={navigation}
      ></AddRestaurantForm>
      <Toast ref={toastRef} position="center" opacity={0.9}></Toast>
      <Loading isVisible={isLoading} text="Creando Restaurante"></Loading>
    </View>
  );
}
