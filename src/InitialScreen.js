import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

//array com os itens
const decks = [
  { id: "1", titulo: "Verdadeiro ou falso", idioma: "francês", cards: "4", revisoes: "10", acertos: "80%", palavrasRever: "20" },
  { id: "2", titulo: "Relacionar palavra à imagem", idioma:"inglês", cards: "4", revisoes: "15", acertos: "90%", palavrasRever: "20" },
  { id: "3", titulo: "Verbos", idioma: "grego", cards: "4", revisoes: "7", acertos: "70%", palavrasRever: "20" },
];

export default function InitialScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um deck para começar sua jornada de aprendizado:</Text>

      
      <FlatList //pega cada objeto do array e renderiza na tela de acordo com o template que definimos no "renderItem"
        data={decks} //qual array de dados rodar
        keyExtractor={(item) => item.id} //primary key de cada item para o React renderizar corretamente
        renderItem={({ item }) => ( //define como cada item deverá ser exibido
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("FlashcardsScreen", { deck: item })} // passa o deck como paramêtro para a tela de flashcards
            //na tela de flashcards, podemos acessar esse parâmetro via route.params.deck
          >
            <Text style={styles.text}>{item.titulo}</Text>
            <Text style={styles.text}>Cards: {item.cards}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

//estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
