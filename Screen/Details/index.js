import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Header from "../../Components/Header";
import ROTINAS from "../../data/index";

export default function Details({ route }) {
  const idParams = route.params.id;
  

  let dataAtual;
  dataAtual = ROTINAS;


  let dataProdutoIndividual;

  dataAtual.forEach((item) => {
    if (item.id === idParams) {
      dataProdutoIndividual = item;
      console.log(item);
    }
  });

  return (
    <View style={estilo.container}>
      <Header />
      <Text style={estilo.texto}>Detalhes do produto selecionado:</Text>
      {dataProdutoIndividual && (
        <View>
          <Image
            source={{ uri: dataProdutoIndividual.imagem }}
            style={estilo.imagem}
          />
          <Text style={estilo.titulo}>{dataProdutoIndividual.titulo}</Text>
          <Text style={estilo.preco}>{dataProdutoIndividual.preco}</Text>
          <Text style={estilo.descricao}>{dataProdutoIndividual.descricao}</Text>
          <Text style={estilo.quantidade}>Estoque do produto: {dataProdutoIndividual.quantidade} unidades.</Text>
          <Text style={estilo.categoria}>Categoria: {dataProdutoIndividual.categoria}</Text>
          {/* Adicione mais informações do produto conforme necessário */}
        </View>
      )}
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  },
  texto: {
    marginTop: 40,
    fontSize: 30,
    color: 'orange',
    fontWeight: "bold",
  },
  imagem: {
    alignSelf:"center",
    width: 325,
    height: 325,
    borderRadius:10,
    marginTop:15
  },
  titulo:{
    marginTop:5,
    alignSelf:"center",
    fontSize: 28,
    justifyContent: 'center',
    fontWeight: "bold",
  },
  preco:{
    fontSize: 23,
    marginTop:4, 
    color: "green",
    alignSelf:"center",
  },
  descricao:{
    fontSize: 22,
    marginTop: 5,
    alignSelf:"center",
  },
  quantidade:{
    fontSize: 22,
    marginTop: 5,
    color: '#808080',
    alignSelf:"center"
  },
  categoria:{
    fontSize: 22,
    marginTop: 5,
    color: "#FF8C00",
    alignSelf:"center"
  }
});
