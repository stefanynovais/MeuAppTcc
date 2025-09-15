import React from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from "react-native";

//array com os itens
const decks = [
  { id: "1", titulo: "Verdadeiro ou falso", idioma: "Inglês", revisoes: "10", acertos: "80%", cards: "4", cor: "#ff4dd2" },
  { id: "2", titulo: "Relacionar palavra à imagem", idioma: "Espanhol", revisoes: "6", acertos: "75%", cards: "4", cor: "#00cc66" },
  { id: "3", titulo: "Verbos", idioma: "Francês", revisoes: "4", acertos: "40%", cards: "4", cor: "#3399ff" },
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
            style={[styles.card, { backgroundColor: item.cor }]} //aplica o estilo base e por cima, aplica a cor que vem do array "decks"
            onPress={() => navigation.navigate("FlashcardsScreen", { deckId: item.id })} //envia o usuário à tela de flashcards, passando o deckId.
          //na tela de flashcards, o deckId carrega os cards corretos de acordo com a escolha de deck do usuário
          >
            <Text style={styles.deckText}>{item.titulo}</Text>
            <Text style={styles.deckInfo}>{item.idioma}</Text>
            <Text style={styles.deckInfo}>Revisões: {item.revisoes}</Text>
            <Text style={styles.deckInfo}>Acertos: {item.acertos}</Text>
            <Text style={styles.deckCards}>Nº Cards: {item.cards}</Text>
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
    backgroundColor: "#1a0033",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  card: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
  },
  deckTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  deckInfo: {
    fontSize: 16,
    color: "#fff",
  },
  deckCards: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
    textAlign: "right",
  },
});
