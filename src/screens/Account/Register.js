import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Input, CheckBox, Overlay } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

export default function Register() {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [seeTerms, setSeeTerms] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>
      <Input
        placeholder="Correo electrónico"
        rightIcon={<Entypo name="email" size={20} color="#777" />}
      />
      <Input
        placeholder="Contraseña"
        rightIcon={<Ionicons name="md-eye-off" size={20} color="#777" />}
      />
      <Input
        placeholder="Repetir contraseña"
        rightIcon={<Ionicons name="md-eye" size={20} color="#777" />}
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
      <Overlay isVisible={seeTerms} onBackdropPress={()=> setSeeTerms(false)} >
        <ScrollView>
          <Text>Terminos y condiciones</Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et
            Malorum by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. The standard
            chunk of Lorem Ipsum used since the 1500s is reproduced below for
            those interested. Sections 1.10.32 and 1.10.33 from de Finibus
            Bonorum et Malorum by Cicero are also reproduced in their exact
            original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </Text>
        </ScrollView>
      </Overlay>
    </View>
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
