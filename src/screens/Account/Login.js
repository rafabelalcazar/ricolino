import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  Image,
  Input,
  SocialIcon,
  Divider,
  Button
} from "react-native-elements";
import Toast from 'react-native-simple-toast';
import burguer from "../../../assets/img/burger.png";
import { Entypo } from "@expo/vector-icons";
import validator from "validator";
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";
import { FacebookApi } from "../../utils/FacebookLogin";

export default function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = async () => {
    if (validator.isEmail(email)) {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          props.navigation.navigate("MyAccount");
        })
        .catch(err => console.log("Error al iniciar sesión", err));
    }
    else{
      Toast.show('Al paracer no ha ingresado un email valido', Toast.LONG)
      console.log('Al parecer esto no es un email');
      
    }
  };

  const loginFacebook = async () => {
    await Facebook.initializeAsync(FacebookApi.appID);
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: FacebookApi.permissions
    });
    if (type === "success") {
      const credentials = await firebase.auth.FacebookAuthProvider.credential(
        token
      );
      console.log(credentials);

      await firebase
        .auth()
        .signInWithCredential(credentials)
        .then(() => {
          console.log("Login con Facebook correcto");
          props.navigation.navigate("MyAccount");
        })
        .catch(() => console.log("Error al autenticar con Facebook"));

      // Get the user's name using Facebook's Graph API
      // const response = await fetch(
      //   `https://graph.facebook.com/me?access_token=${token}`
      // )
      // .then(() => console.log(response.json()))
      // await console.log(response.json())

      // .catch(() => console.log("Error al obtener respuesta"));
      // alert("Logged in!", `Hi ${(await response.json()).name}!`);
      // console.log(response.json());
    } else {
      // type === 'cancel'
      console.log("Se canceló el inicio de sesión con Facebook");
    }
    // console.log("Estoy iniciando con FB", type);
  };

  // console.log(props)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ricolino</Text>
      <Image source={burguer} style={styles.img} />

      <Text style={[styles.text, { fontSize: 25 }]}>Iniciar sesión</Text>

      <View style={{ width: "100%" }}>
        <Input
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          rightIcon={<Entypo name="email" />}
        />
        <Input
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          rightIcon={<Entypo name="lock" />}
        />
      </View>
      <Button
        title="Iniciar sesión"
        containerStyle={styles.button}
        onPress={login}
      />
      <View style={[styles.section, { flexDirection: "row" }]}>
        <Text style={styles.textInfo}>¿No tienes cuenta?</Text>
        <Text
          onPress={() => props.navigation.navigate("Register")}
          style={styles.textButton}
        >
          Registrate
        </Text>
      </View>

      <Divider style={{ width: "100%", marginVertical: 5 }} />
      <View
        style={
          (styles.section,
          { flexDirection: "row", justifyContent: "space-around" })
        }
      >
        <SocialIcon
          style={styles.socilButton}
          title="Facebook"
          button
          type="facebook"
          onPress={loginFacebook}
        />
        <SocialIcon
          style={styles.socilButton}
          title="Google"
          button
          type="google"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: 10
  },
  section: {
    marginVertical: 10
  },

  text: {
    fontSize: 40,
    color: "#666666"
  },
  textInfo: {},
  textButton: {
    color: "blue",
    fontWeight: "bold",
    marginLeft: 5
  },
  img: {
    width: 120,
    height: 120
  },
  socilButton: {
    paddingHorizontal: 20,
    height: 40
  },
  button: {
    marginVertical: 10
  }
});
