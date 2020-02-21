import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FloatingAction from '../../components/FloatingAction';
import * as firebase from 'firebase';
import { Entypo } from '@expo/vector-icons'

export default function Restaurants(props) {

    const {navigation} = props

    const [user, setUser] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(userInfo =>
            setUser(userInfo)
        )
    },[])

    return (
        <View style={styles.container}>

            {
                user && <FloatingAction
                style={{ backgroundColor: '#567899' }}
                onPress={()=>navigation.navigate('AddRestaurant')}
            />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
    }
})