import {createStackNavigator,createAppContainer} from 'react-navigation'

import Layar1 from './b'
import Layar2 from './c'

const Route = createStackNavigator({
    Layar1:{
        screen:Layar1,
        navigationOptions:{title:'HOME'}
    },
    Layar2:{
        screen:Layar2
    }
})

export default createAppContainer(Route)