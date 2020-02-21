import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Avatar } from 'react-native-elements';

const AddImages = (props) => {
    const { images, setImages } = props

    const imagesChoice = async () => {
        const resultPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        const statusPermissions = resultPermissions.status
        // console.log(statusPermissions);

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
                setImages([...images, image.uri])
                // console.log(images);
            }
        } else {
            console.log('Es necesario aceptarlos permisos de acceso a la Galeria');
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={imagesChoice} style={styles.addButton} >
                <Entypo name='camera' size={40} style={styles.cameraPicker} color='#666' />
            </TouchableOpacity>
            {
                images.map( item => <Avatar style={styles.addButton} /> )
            }
            
        </View>
    )
}

export default AddImages

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'

    },
    addButton: {
        backgroundColor: '#bbb',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        borderRadius: 8,
        marginRight: 10

    },
})
