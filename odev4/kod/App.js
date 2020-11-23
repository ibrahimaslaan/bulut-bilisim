import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView, TouchableNativeFeedback } from 'react-native';


import iller from './iller.json';

const bolgeler = [];
iller.forEach(item => {
  if (!bolgeler.includes(item.bolge)) {
    bolgeler.push(item.bolge) 
  }
});


const App = () => {
  const [region, setRegion] = useState();
  let cityList = [];

  if (region) {
    cityList = iller.filter(il => il.bolge === region);
  }

  return (
    <View>
        <FlatList
          style={{ height: '50%'}}
          data={bolgeler}
          renderItem={({ item }) => <TouchableNativeFeedback onPress={() => setRegion(item)}>
            <Text style={{padding: 10}}>{item}</Text>
          </TouchableNativeFeedback>}
          keyExtractor={item => item}
        />
        <ScrollView>
          {cityList.map(item => {
            return (
              <Text>
                Ad: {item.ad} Plaka: {item.plaka} Nufus: {item.nufus}
              </Text>
            )
          })}
        </ScrollView>
    </View>
  );
}

export default App;