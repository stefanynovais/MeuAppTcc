import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function FlashcardsScreen({ route }) {
  const { deck } = route.params; //pega o deck passado como parâmetro na navegação

  return (
    <View style={styles.container}>
        <LinearGradient colors={['#200144', '#542BD7']} style={styles.container}>
            <Text style={styles.title}>{deck.titulo}</Text>
            <Text style={styles.subtitle}>Idioma: {deck.idioma}</Text>

            <Text>Nº de cards: {deck.cards}</Text>
            <Text>Revisões: {deck.revisoes}</Text>
            <Text>Acertos: {deck.acertos}%</Text>
            <Text>Palavras para revisar: {deck.palavrasRever}</Text>
        </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 28,
        marginBottom: 5,
        fontWeight: "bold",
        color: "#E5E3F2",
    },
    subtitle: {
        fontSize: 18,
        color:"#542BD7",
        marginBottom: 15,
        fontWeight: "medium",
    },
    statsCard: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "#542BD7", 
        borderRadius: 12,
        padding: 20,
        marginBottom: 30,
    },
    statsText: {
        fontSize: 18,
        color: "#E5E3F2",
        fontWeight: "bold",
        marginBottom: 8,
    },
    button: {
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 15,
    },
    buttonText: {
        color: "E5E3F2",
        fontSize: 16,
    },
});
