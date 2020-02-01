import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default function UserLoged(){
    return(
        <View style={styles.container} >
            <Text>UserLoged</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#777777'
    }
})