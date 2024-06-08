import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  titulo: {
    fontSize: 35,

    fontWeight: "bold",

    marginTop: 20,
  },

  subtitulo: {
    fontSize: 20,

    fontWeight: "bold",

    marginTop: 15,
  },

  tituloCard: {
    fontSize: 15,
    alignSelf:"center",
    fontWeight: "bold",
    marginTop:25,
    color: "white",
  },
  logo: {
    width: 40, 
    height: 40,
    //resizeMode: 'contain',
  }
});

export default estilo;