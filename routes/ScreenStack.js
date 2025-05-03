import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Data from "../screens/Data";
import Details from "../screens/Details";
const Stack=createNativeStackNavigator();

const ScreenStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Data" component={Data}></Stack.Screen>
            <Stack.Screen name="Details" component={Details}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default ScreenStack