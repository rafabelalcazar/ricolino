import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Image, Input, SocialIcon, Divider } from "react-native-elements";
import burguer from "../../assets/img/burger.png";
import { Entypo } from "@expo/vector-icons";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Deleciapp</Text>
      <Image source={burguer} style={styles.img} />

      <Text style={[styles.text, { fontSize: 25 }]}>Iniciar sesión</Text>
    
      <View style={{ width: "100%" }}>
        <Input placeholder="Email" rightIcon={<Entypo name="email" />} />
        <Input placeholder="Password" rightIcon={<Entypo name="lock" />} />

      </View>
      <View style={[styles.section,{flexDirection:'row'}]}>
        <Text style={styles.textInfo}>¿No tienes cuenta?</Text>
        <Text style={styles.textButton}>Registrate</Text>

      </View>

      <Divider style={{width:'100%',marginVertical:5}} />
      <View
        style={
          (styles.section,
          { flexDirection: "row", justifyContent: "space-around" })
        }
      >
        <SocialIcon style={styles.socilButton} title="Facebook" button type="facebook" />
        <SocialIcon style={styles.socilButton} title="Google" button type="google" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding:10
  },
  section:{
      marginVertical:10

  },

  text: {
    fontSize: 40,
    color: "#666666"
  },
  textInfo:{

  },
  textButton:{
      color:'blue',
      fontWeight:'bold',
      marginLeft:5
  },
  img: {
    width: 200,
    height: 200
  },
  socilButton:{
      paddingHorizontal:20,
      height:40
  }
});
