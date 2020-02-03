import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Input, CheckBox, Overlay, Button } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

export default function Register() {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [seeTerms, setSeeTerms] = useState(false);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [repeatPassword, setrepeatPassword] = useState();
  const [hidePassword, sethidePassword] = useState(true);
  const [hideRepeatPassword, sethideRepeatPassword] = useState(true);

  const register = () => {
    console.log(email);
    console.log(password);
    console.log(repeatPassword);
    console.log(acceptTerms);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      enabled
      keyboardVerticalOffset={150}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Crear cuenta</Text>
          <Input
            placeholder="Correo electrónico"
            rightIcon={<Entypo name="email" size={20} color="#777" />}
            onChangeText={text => setemail(text)}
          />
          <Input
            placeholder="Contraseña"
            rightIcon={
              <Ionicons
                name={hidePassword ? "md-eye" : "md-eye-off"}
                size={20}
                color="#777"
                onPress={() => sethidePassword(!hidePassword)}
              />
            }
            onChangeText={text => setpassword(text)}
            secureTextEntry={hidePassword}
          />
          <Input
            placeholder="Repetir contraseña"
            rightIcon={
              <Ionicons
                name={hideRepeatPassword ? "md-eye" : "md-eye-off"}
                size={20}
                color="#777"
                onPress={() => sethideRepeatPassword(!hideRepeatPassword)}
              />
            }
            onChangeText={text => setrepeatPassword(text)}
            secureTextEntry={hideRepeatPassword}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <CheckBox
              onPress={() => setAcceptTerms(!acceptTerms)}
              checked={acceptTerms}
            />
            <Text onPress={() => setSeeTerms(true)}>
              Acepto los terminos y condiciones de uso
            </Text>
          </View>
          <Button title="Registrarme" onPress={register} />
          <Overlay
            isVisible={seeTerms}
            onBackdropPress={() => setSeeTerms(false)}
          >
            <ScrollView>
              <Text>Terminos y condiciones</Text>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. The standard chunk of Lorem Ipsum used since the
                1500s is reproduced below for those interested. Sections 1.10.32
                and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are
                also reproduced in their exact original form, accompanied by
                English versions from the 1914 translation by H. Rackham. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. The standard chunk of Lorem Ipsum used since the
                1500s is reproduced below for those interested. Sections 1.10.32
                and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are
                also reproduced in their exact original form, accompanied by
                English versions from the 1914 translation by H. Rackham.
              </Text>
            </ScrollView>
          </Overlay>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
    // backgroundColor:'#777777'
  },
  title: {
    marginVertical: 20,
    fontSize: 30,
    color: "#5678dd"
  }
});
