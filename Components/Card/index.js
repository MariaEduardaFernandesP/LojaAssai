import { Text, View, Image,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import estilo from "./style";

export default function Card({ idProduto, preco, titulo, imagem, descricao, quantidade, categoria}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={estilo.card} onPress={() => navigation.navigate('Details', { id: idProduto })}>
      <Image style={estilo.imagemCard} source={{ uri: imagem }} />

      <View style={{ marginLeft: 15, width: 150 }}>
        <Text style={estilo.tituloCard}>{titulo}</Text>

        <Text style={estilo.textoCard}>{descricao}</Text>
        <Text style={estilo.textoCardquant}>{quantidade}</Text>
        <Text style={estilo.textoCardcateg}>{categoria}</Text>
      </View>

      <Text style={{ fontSize: 20,marginTop:20, color: "green", alignSelf:"center"}}>{preco}</Text>
    </TouchableOpacity>
  );
}