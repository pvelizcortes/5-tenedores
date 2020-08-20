import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-elements";

export default function InfoUser(props) {
   const { userInfo } = props;
  
  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        containerStyle={styles.userInfoAvatar}
      ></Avatar>
      <View>
        <Text style={styles.displayName}>Pablo Veliz Cortes</Text>
        <Text>contact.pveliz@gmail.com</Text>
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  userInfoAvatar: {
    marginRight: 20,
  },
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30,
  },
  displayName: {
    fontWeight: "bold",
    paddingBottom: 10,
  },
});
