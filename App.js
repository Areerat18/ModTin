import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import Member from './screens/Member'

const Stack = createStackNavigator();


const App=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator intialRouteName="Home">
                <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    title:'BLACKPINK',
                    headerTintColor:'#DC143C',
                    headerStyle: {
                        backgroundColor: '#000000',
                      },
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                }} />
                <Stack.Screen 
                name="Details" 
                component={DetailsScreen} 
                options={{
                    title:'THE ALBUM',
                    headerTintColor:'#DC143C',
                    headerStyle: {
                        backgroundColor: '#000000',
                      },
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                }}
                />
                  <Stack.Screen 
                name="Member" 
                component={Member} 
                options={{
                    title:'MEMBER',
                    headerTintColor:'#DC143C',
                    headerStyle: {
                        backgroundColor: '#000000',
                      },
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                }}
                />
          

            </Stack.Navigator>

        

        </NavigationContainer>
    )
}
export default App;
