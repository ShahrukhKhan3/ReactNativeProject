import React from 'react';
import {View, Text, Button} from 'react-native';

export default function DetailScreen({navigation, route}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen of ID = {route.params.id}</Text>
      <Button 
        onPress={() => navigation.goBack()}
        title = "Go back to Home Page"
        /> 
    </View>
  );
}