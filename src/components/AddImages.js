import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { Avatar } from "react-native-elements";
import NoImage from '../../assets/img/no-image.png';

const AddImages = props => {
  const { images, setImages } = props;
  const [banner, setBanner] = useState("");

  const imagesChoice = async () => {
    const resultPermissions = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    const statusPermissions = resultPermissions.status;
    // console.log(statusPermissions);

    if (statusPermissions == "granted") {
      const image = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.1
        // allowsMultipleSelection:true
      });

      // console.log(image);
      if (image.cancelled) {
        console.log("Has cerrado la galeria de imagenes");
      } else {
        setImages([...images, image.uri]);
        // console.log(images);
      }
    } else {
      console.log("Es necesario aceptarlos permisos de acceso a la Galeria");
    }
  };

  const deleteImage = image => {
    console.log(image);
    Alert.alert("Eliminar imagen", "¿Está seguro de eliminar esta image?", [
      {
        text: "Cancelar",
        onPress: () => console.log("Canceló la operación")
      },
      {
        text: "Eliminar",
        onPress: () => setImages(images.filter(imageURI => imageURI != image))
      }
    ]);
  };

  return (
    <View  >
        <Image style={{width:'100%',height:250}} resizeMode='cover' source={ banner === ""?  NoImage :{uri:images[banner]}  } />
          <Text>Selecciona las imagenes del restaurante</Text>
      <View style={styles.container}>
        {images.length < 5 && (
          <TouchableOpacity onPress={imagesChoice} style={styles.addButton}>
            <Entypo name="camera" size={30} color="#666" />
          </TouchableOpacity>
        )}

        {images.map((item, index) => (
          <TouchableOpacity
            key={index}
            onLongPress={() => deleteImage(item)}
            onPress={() => setBanner(index)}
          >
            <Image
              source={{ uri: item }}
              style={[
                styles.addButton,
                banner == index
                  ? { borderColor: "#ffbb66", borderWidth: 3 }
                  : null
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default AddImages;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent:'space-between'
  },
  addButton: {
    backgroundColor: "#bbb",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70
    // borderRadius: 8,
    // margin: 5
  }
});
