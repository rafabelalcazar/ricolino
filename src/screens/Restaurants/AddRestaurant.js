import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import AddImages from "../../components/AddImages";
import { ScrollView } from "react-native-gesture-handler";

const AddRestaurant = () => {
  const [images, setImages] = useState([]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <AddImages images={images} setImages={setImages} />
        <MapView
          style={{ width: "100%", height: 300 }}
          initialRegion={{
            latitude: 2.44,
            longitude: -76.614,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      </View>
    </ScrollView>
  );
};

export default AddRestaurant;

const styles = StyleSheet.create({
  container: {
    flex: 1
    //    justifyContent: "center",
    //    alignItems:"center"
  }
});
