import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function FlashcardsScreen({ route }) {
  const { deck } = route.params; //pega o deck passado como parâmetro na navegação

  return (
    <View style={styles.container}>
        <LinearGradient colors={['#200144', '#542BD7']} style={styles.container}>
            <Text style={styles.title}>Deck {deck.titulo}</Text>
            <Text style={styles.subtitle}>{deck.idioma}</Text>

            <View style={styles.statsCard}>
                <Text style={styles.statsText}>Nº de cards: {deck.cards}</Text>
                <Text style={styles.statsText}>Revisões: {deck.revisoes}</Text>
                <Text style={styles.statsText}>Acertos: {deck.acertos}%</Text>
                <Text style={styles.statsText}>Nº de palavras para revisar: {deck.palavrasRever}</Text>
            </View>

            <TouchableOpacity 
                style={[styles.button, { backgroundColor: '#0B66FE' }]}
            >
                <Text style={styles.buttonText}>Editar deck</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.button, { backgroundColor: '#35C763' }]}
            >
                <Text style={styles.buttonText}>Revisar cartões</Text>
            </TouchableOpacity>

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
