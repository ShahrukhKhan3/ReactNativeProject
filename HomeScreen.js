import React from 'react';
import {useState, useEffect} from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';

export default HomeScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <View>
            <Text
              style={{color : item.completed ? "green" : "red"}}
              onPress={() => navigation.navigate("Detail", {id: item.id})}
              >
              {item.id} := {item.title}, {item.completed ? "DONE" : "PENDING"}
            </Text>
            <Text>----------------------------------------------------</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};