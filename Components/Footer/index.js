import { View, Text } from "react-native";
import estilo from "./style";
export default function Footer() {
  return (
    <>
      <View
        style={{
          marginTop:30,
          width: '100%',
          height:60,
         // flexDirection: "row",
          //alignItems: "center",
          justifyContent: "space-between",
          backgroundColor:'orange',
          
        }}
      >
        
            <Text style={estilo.tituloCard}>Feito por:  Maria Eduarda Fernandes, Vivian e Gheovana</Text>
           

      </View>
    </>
  );
}