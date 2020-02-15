import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'

const InfoUser = (props) => {
    const { name, email, photoURL } = props
    return (
        <View style={styles.container}>
            <Avatar
                source={{ uri: photoURL }}
                rounded
                size='xlarge'
                showEditButton
            />
            <View style={{marginVertical:10, alignItems:'center'}} >
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
