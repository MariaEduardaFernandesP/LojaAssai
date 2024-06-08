import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';
import Header from "../../Components/Header";

export default function Details() {
  return (
    <View style={estilo.container}>
     <Header></Header>        
     <Text style={estilo.texto}>Detalhes sobre o nosso produto:</Text>
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    backgroundColor: 'white',
    //paddingHorizontal: 20,
  },
  texto:{
    marginTop:40,
    fontSize: 30,
    color:"orange",
    fontFamily: "Calibri",
    fontWeight: "bold",
  }
});