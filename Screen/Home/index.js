import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import Header from "../../Components/Header";
import Card from "../../Components/Card";
import ROTINAS from "../../data/index";
import { ScrollView } from "react-native-web";
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
      <Text style={{color:"orange",fontWeight: "bold",fontSize: 35, marginTop: 30,marginBottom: 30, alignSelf:"center"}}>Nossos produtos: </Text>
      <FlatList style={{width:'100%',}}
        data={ROTINAS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card 
          idProduto={item.id}
            titulo={item.titulo}
            imagem={item.imagem}
            descricao={item.descricao}
          />
        )}
        numColumns={4}
        contentContainerStyle={{ alignItems: 'center' }}
      />
      <Footer></Footer>
    </ScrollView>
    
  );
}
const estilo = StyleSheet.create({
  container: {
    
    backgroundColor: "white",
    paddingHorizontal: 20,
    flex: 1, 
    margin: 5
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