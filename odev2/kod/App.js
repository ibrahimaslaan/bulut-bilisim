import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const style = StyleSheet.create({
  container: {
    padding: 25
  },
  text: {
    fontSize: 20,
    padding: 10,
    marginTop: 15
  }
})


const App = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Ad ve Soyad: İbrahim Aslan</Text>
      <Text style={style.text}>Yaş: 21</Text>
      <Text style={style.text}>Lise: Lise</Text>
      <Text style={style.text}>Memleket: Adıyaman</Text>
      <Text style={[style.text, { textAlign: 'center', margin: 10 }]}>İş Deneyimleri</Text>
      <Text style={style.text}>FİT MEDYA REKLAM AJANSI / WEB DEVELOPER</Text>
    </View>
  )
}

export default App;