import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default function MyAccount(){
    return(
        <View style={styles.container} >
            <Text>MyAccount</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#777777'
    }
})