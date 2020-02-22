import React,{useState} from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'

import AddImages from '../../components/AddImages';

const AddRestaurant = () => {
    const [images, setImages] = useState([])

    return (
        <View style={styles.container}>
            <AddImages images={images} setImages={setImages} />
        </View>
    )
}

export default AddRestaurant

const styles = StyleSheet.create({
    container: {
       flex: 1,
    //    justifyContent: "center",
    //    alignItems:"center"
    },
})