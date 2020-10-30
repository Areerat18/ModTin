import React from 'react'
import { View,Text,Button} from 'react-native';

const HomeScreen=({navigation})=>{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>BLACKPINK THE ALBUM</Text>

            <Button 
            title='Go to the album'
            onPress={()=>navigation.navigate('Details')}
            />
            <Button 
            title='Go to Member'
            onPress={()=>navigation.navigate('Member')}
            />
        
        </View>
    )
}
export default HomeScreen;
