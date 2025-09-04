import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "react-native-linear-gradient";

const SplashScreen = ({ navigation }) => {
    useEffect(() => {

        const timer = setTimeout(() => {
            navigation.replace("InitialScreen");
        }, 3000); //após 3 segundos, vai para a tela inicial

        return () => clearTimeout(timer); //limpa o timer ao sair 
    }, [navigation]);

    return (
          <LinearGradient //funciona como um container, como a view
            colors={["#a4508b", "#5f0a87"]} // cores do degradê
            style={styles.container}
        >
            <Text style={styles.logo}>TCC</Text>
        </LinearGradient>
    );
};

//estilização da tela
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
    },
});


export default SplashScreen; 
