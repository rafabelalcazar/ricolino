import {createStackNavigator} from 'react-navigation-stack'
import MyAccount from '../screens/Account/MyAccount';
import Login from '../screens/Account/Login';
import Register from '../screens/Account/Register';


export default StackAccount = createStackNavigator({
    MyAccount:{
        screen: MyAccount,
        navigationOptions:{
            title: 'Mi cuenta',
            cardStyle:{
                backgroundColor:'white'
            }
        }
    },
    Login:{
        screen: Login,
        navigationOptions:{
            title:'Login',
            cardStyle:{
                backgroundColor:'white'
            }
        }
    },
    Register:{
        screen: Register,
        navigationOptions:{
            title: 'Registro',
            cardStyle:{
                backgroundColor:'white'
            }
        }
    }
}
)