import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  cardTarefa: {
    //marginTop: 20,
    


    width: 300,

    height: 350,

    alignItems: "center",

    justifyContent: 'space-between',

    borderRadius: 10,

    borderColor: "white",

    //borderWidth: 2,
    
    //flexDirection: "row",

    padding: 15,

    //shadowColor: "#000",

    //shadowOffset: { width: 0, height: 2 },

   // shadowOpacity: 0.3,

    //shadowRadius: 2,

    //elevation: 5,
    margin:30
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    borderRadius: 5,
   //elevation: 5,
   //alignItems:'center',
   
   width:300,
   height:430,
   
  },
  textoCard: {
    fontSize: 16,
    marginTop: 5,

  },
  textoCardcateg: {
    fontSize: 15,
    marginTop: 5,
    color: "#FF8C00"

  },
  textoCardquant: {
    fontSize: 17,
    marginTop: 5,
    color: '#808080'

  },

  imagemCard: {
    width: 225,
    alignSelf:"center",
    height: 225,
    borderRadius: 5,
    marginBottom:5
  },

  tituloCard: {
    fontSize: 18,
    justifyContent: 'center',
    fontWeight: "bold",

  },
  
});

export default estilo;