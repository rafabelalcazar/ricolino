import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'
import * as firebase from "firebase";
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

const InfoUser = (props) => {
    const { name, email, photoURL, setReloadData } = props

    const changeAvatar = async () => {
        const resultPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        const statusPermissions = resultPermissions.status
        console.log(statusPermissions);

        if (statusPermissions == 'granted') {
            const image = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.1
            })

            // console.log(image);
            if (image.cancelled) {
                console.log('Has cerrado la galeria de imagenes');
            } else {
                uploadImage(image.uri, email)
                    .then(() => {
                        console.log('Imagen subida correctamente');
                        updatePhotoUrl(email)
                    })
                    .catch(() => {
                        console.log('Error al subir imagen');

                    })
            }
        } else {
            console.log('Es necesario aceptarlos permisos de acceso a la Galeria');
        }
    }

    const uploadImage = async (uri, name) => {
        const deviceImage = await fetch(uri)
        const blob = await deviceImage.blob()
        const ref = firebase.storage().ref().child(`avatar/${name}`)
        return ref.put(blob)
    }

    const updatePhotoUrl = email => {
        firebase.storage().ref(`avatar/${email}`).getDownloadURL()
            .then( async result => {
                setReloadData(false)
                console.log(result);
                const update ={
                    photoURL: result
                }
                await firebase.auth().currentUser.updateProfile(update)
                setReloadData(true)
            })
            .catch(() => console.log('Error al recuperar imagen de firebase')
            )

    }
    return (
        <View style={styles.container}>
            <Avatar
                source={{ uri: photoURL }}
                rounded
                size='xlarge'
                showEditButton
                onEditPress={changeAvatar}
            />
            <View style={{ marginVertical: 10, alignItems: 'center' }} >
                <Text style={styles.text} >{name}</Text>
                <Text style={styles.text} >{email}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        color: '#345678'
    }
})
export default InfoUser
