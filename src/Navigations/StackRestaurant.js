import {createStackNavigator} from 'react-navigation-stack'
import Restaurants from '../screens/Restaurants/Restaurants'
import AddRestaurant from '../screens/Restaurants/AddRestaurant'

export default StackRestaurant = createStackNavigator({
    Restaurants:{
        screen: Restaurants,
        navigationOptions:{
            title:'Restaurantes'
        }
    },
    AddRestaurant:{
        screen: AddRestaurant,
        navigationOptions:{
            title:'Nuevo Restaurante'
        }
    }
    
})