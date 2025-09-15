import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

//array com os itens
const decks = [
  { id: "1", titulo: "Verdadeiro ou falso", cards: "4" },
  { id: "2", titulo: "Relacionar palavra à imagem", cards: "4" },
  { id: "3", titulo: "Verbos", cards: "4" },
];

export default function InitialScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um deck para começar sua jornada de aprendizado:</Text>

      
      <FlatList //pega cada objeto do array e renderiza na tela de acordo com o template que definimos no "renderItem"
        data={decks} //qual array de dados rodar
        keyExtractor={(item) => item.id} //primary key de cada item para o React renderizar corretamente
        renderItem={({ item }) => ( //define como cada item deverá ser exibido
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("FlashcardsScreen", { deckId: item.id })} //envia o usuário à tela de flashcards, passando o deckId.
            //na tela de flashcards, o deckId carrega os cards corretos de acordo com a escolha de deck do usuário
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
