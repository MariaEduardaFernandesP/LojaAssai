import React from "react";
import { Text, StyleSheet, View, Image, FlatList} from "react-native";
import Header from "../../Components/Header";
import Card from "../../Components/Card";
import alimenticio from "../../data/index";
import { ScrollView } from "react-native";
import frios from "../../frios/index";
import limpeza from "../../limpeza/index";
import Footer from "../../Components/Footer";



export default function Home(){
  return (
    <ScrollView style={estilo.container} >
      <Header></Header>
      <Image
        style={estilo.logo}
        source={{
          uri: 'https://www.assai.com.br/sites/all/themes/assai_2024/styles/custom/ofertas-2024/images/banner.webp',
        }}
      />
      <Text style={{color:"orange",fontWeight: "bold",alignSelf:"center",fontSize: 30, marginTop: 20,marginBottom: 15}}>Alimentício</Text>
      <FlatList style={{alignSelf:"center"}}
        data={alimenticio}
        horizontal = {true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            preco={item.preco}
            titulo={item.titulo}
            imagem={item.imagem}
            descricao={item.descricao}
            quantidade={item.quantidade}
            categoria={item.categoria}
          />
        )}
      />

<Text style={{color:"orange",fontWeight: "bold",alignSelf:"center",fontSize: 30, marginTop: 20,marginBottom: 15}}>Frios / Carnes</Text>
      <FlatList style={{alignSelf:"center"}}
        data={frios}
        horizontal = {true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
             preco={item.preco}
            titulo={item.titulo}
            imagem={item.imagem}
            descricao={item.descricao}
            quantidade={item.quantidade}
            categoria={item.categoria}
          />
        )}
      />
       <Text style={{color:"orange",fontWeight: "bold",alignSelf:"center",fontSize: 30, marginTop: 20,marginBottom: 15}}>Limpeza</Text>
      <FlatList style={{alignSelf:"center"}}
        data={limpeza}
        horizontal = {true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
             preco={item.preco}
            titulo={item.titulo}
            imagem={item.imagem}
            descricao={item.descricao}
            quantidade={item.quantidade}
            categoria={item.categoria}
          />
        )}
      />
      <Text style={estilo.subtitulo}></Text>
      <Footer></Footer>
    </ScrollView>
    
  );
}
const estilo = StyleSheet.create({
  container: {  
      
   //alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 35,
    alignItems: "center",
    fontWeight: "bold",
   marginLeft: 800,
    marginTop: 30,
    marginBottom: 30,
    color:"	#FF8C00"
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
   color:"white",
    marginTop: 40,
  },
  logo: {
    marginTop:20,
    width: 1300, 
    height: 500,
    //resizeMode: 'contain',
    alignSelf:"center",
        
  }
});