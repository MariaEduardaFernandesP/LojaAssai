import { View, Text, TouchableOpacity, Image } from "react-native";
import estilo from "./style";
export default function Header() {
  return (
    <>
      <View style={{width: 1900, height:50, flexDirection: "row", alignItems: "center", justifyContent: "space-between",}}>
        <TouchableOpacity >
        <Image
        style={estilo.logo}
        source={{
          uri: 'https://mais.opovo.com.br/_midias/jpg/2024/02/20/760x570/1_logo_assai_2024-25616659.jpg',
        }}
      />
          </TouchableOpacity>
         
      </View>
    </>
  );
}