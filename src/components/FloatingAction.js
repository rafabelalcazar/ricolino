import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'

const FloatingAction = (props) => {
    const { onPress, style, icon } = props
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress} >
            {
                icon ? icon : <Entypo
                    name='plus'
                    size={30}
                    color='white'
                />
            }

        </TouchableOpacity>
    )
}

export default FloatingAction

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        right:20,
        bottom:20,
        width: 60,
        height: 60,
        borderRadius: 40,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }
})