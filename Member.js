import React from 'react'
import { View,Text,Button } from 'react-native';

const Member=({navigation})=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>MEMBER</Text>
        <Button 
            title='Go to Home'
            onPress={()=>navigation.navigate('Home')}
        />
        </View>
    )
}
export default Member;