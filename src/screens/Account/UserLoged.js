import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import * as firebase from "firebase";
import InfoUser from "../../components/InfoUser";

const logout = async () => {
  await firebase.auth().signOut();
};






export default function UserLoged() {

  const [dataUser,setDataUser] = useState({})

  useEffect(() => {
    ( async () => {
      const user = await firebase.auth().currentUser
      const {email, displayName,photoURL} = user
      setDataUser({
        email,
        displayName,
        photoURL
      })
      console.log(dataUser);
    }
    )()
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.profile} >Perfil</Text>
      <InfoUser name={dataUser.displayName} email={dataUser.email} photoURL={dataUser.photoURL} />
      <Button title="Cerrar sesión" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems:'center',
    padding:20,
    flex: 1
  },
  profile:{
    alignSelf:'center',
    color:"#456789",
    fontSize:30,
    
  }
});
