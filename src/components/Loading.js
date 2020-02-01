import React from 'react';
import { Text, View,StyleSheet, ActivityIndicator } from 'react-native';

export default function Loading(){
    return(
        <View style={styles.container} >
            <ActivityIndicator animating size={50} color='#4567ff'/>
            <Text style={styles.text}>Cargando...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'#4567ff',
        fontSize: 18,
    }
})