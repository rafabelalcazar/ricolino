import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import * as firebase from "firebase";

const logout = async () => {
  await firebase.auth().signOut();
};

export default function UserLoged() {
  return (
    <View style={styles.container}>
      <Text>UserLoged</Text>
      <Button title="Cerrar sesión" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor:'#777777'
  }
});
