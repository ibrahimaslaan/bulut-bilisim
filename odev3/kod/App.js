import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Item = ({ name }) => (
  <View style={{ padding: 10 }}>
    <Text>{name}</Text>
    <TextInput style={{ borderWidth: 2, borderColor: 'red' }}/> 
  </View>
)


const App = () => (
  <View>
    <Item name="Ad" />
    <Item name="Soyad" />
    <Item name="Yaş" />
    <Item name="EPosta" />
    <Item name="Şifre" />
    <Item name="Şifre tekrar" />
    <Button title="Kaydol" />
  </View>
)

export default App;