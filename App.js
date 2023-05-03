import { StatusBar } from 'expo-status-bar';
import { TextInput, FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
export default function App() {

  let listaInicial = ['Caderno', 'Lapis', 'Tesoura']
  let [listaMateriais, definirListaMateriais] = useState(listaInicial)
  return (
    <View style={styles.container}>
      
      <Text>APP-Lista de Material escolar</Text>
      <StatusBar style="auto" />
      <FlatList
       data= {listaMateriais}
       renderItem={({item})=> <Text>{item}</Text>}
      />      
     <TextInput
     placeholder={'inserir Novo Item'}
     onSubmitEditing={({nativeEvent})=>
     definirListaMateriais(listaMateriais.concat(nativeEvent.text))
  }
  
     />
      <TextInput
     placeholder={'inserir Preço'}
     onSubmitEditing={({nativeEvent})=>
     definirListaMateriais(listaPreço.concat(nativeEvent.text))
  }
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

});
