import React from "react";
import { Text, View, StyleSheet, } from "react-native";
import { Button } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { withNavigation } from 'react-navigation';

function UserGuest(props) {
    // console.log(props);
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Espera !!!</Text>
      <Entypo name="emoji-happy" size={80} color={'#777'} />
      <Text style={styles.text}>Por favor inicia sesión para ver más contenido</Text>
      <Button title='Iniciar sesión' onPress={()=> props.navigation.navigate('Login')} />
    </View>
  );
}

export default withNavigation(UserGuest)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent:'center',
    alignItems:'center',
    padding:20
  },
  title:{
      fontSize:40,
      color:'#777'
  },
  text:{
      color:'#777',
      marginVertical:10
  }
});
