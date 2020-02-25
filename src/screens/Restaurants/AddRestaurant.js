import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import * as Permissions from "expo-permissions";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import * as firebase from "firebase";
import AddImages from "../../components/AddImages";
import { ScrollView } from "react-native-gesture-handler";
import RestaurantForm from "../../components/RestaurantForm";
import { Overlay } from "react-native-elements";

const AddRestaurant = () => {
  const [images, setImages] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const [address, setAddress] = useState(null);
  const [location, setLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await Permissions.askAsync(Permissions.LOCATION);
      // console.log(result);
      const statusPermission = result.status;

      if (statusPermission != "granted") {
        console.log("Debe permitir acceso a la ubicación");
      } else {
        let loc = await Location.getCurrentPositionAsync({});
        console.log(loc);
        setLocation({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        });

        // setLocation(location)
      }
    })();
  }, []);

  const send = () => {
    console.log(restaurantName);
    console.log(address);
  };

  const saveLocation = () => {
    setLocation(location);
    console.log(location);

    console.log("Ubicación Guardada correctamente");
    setShowMap(false);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <AddImages images={images} setImages={setImages} />
        <RestaurantForm
          setRestaurantName={setRestaurantName}
          setAddress={setAddress}
          setShowMap={setShowMap}
        />
        <Button title="Guardar" onPress={send} />

        <Overlay onBackdropPress={() => setShowMap(false)} isVisible={showMap}>
          <View style={{ flex: 1 }}>
            {location ? (
              <MapView
                style={{ width: "100%", flex: 1 }}
                initialRegion={location}
                showsUserLocation={true}
              />
            ) : (
              <View style={{ flex: 1, backgroundColor: "#888" }} />
            )}

            <View style={styles.containerButtons}>
              <Button title="Guardar" onPress={saveLocation} />
              <Button
                title="Cancelar"
                color="#e70"
                onPress={() => setShowMap(false)}
              />
            </View>
          </View>
        </Overlay>
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
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
