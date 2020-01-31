import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default function UserGuest(){
    return(
        <View style={styles.container} >
            <Text>UserGuest</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#777777'
    }
})