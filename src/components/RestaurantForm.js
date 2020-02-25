import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RestaurantForm = props => {
  const { setRestaurantName, setAddress, setShowMap } = props;
  return (
    <View style={{ paddingVertical: 10 }}>
      <Input
        placeholder="Nombre Restaurante"
        onChangeText={text => setRestaurantName(text)}
      />
      <Input
        placeholder="Ubicación"
        onChangeText={text => setAddress(text)}
        rightIcon={
          <MaterialCommunityIcons
            name="google-maps"
            color="#777"
            onPress={()=>setShowMap(true)}
            size={30}
          />
        }
      />
    </View>
  );
};

export default RestaurantForm;

const styles = StyleSheet.create({});
