import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SplashScreen = ({ navigation }) => {
    useEffect(() => {

        const timer = setTimeout(() => {
            navigation.replace("InitialScreen");
        }, 3000); //após 3 segundos, vai para a tela inicial

        return () => clearTimeout(timer); //limpa o timer ao sair 
    }, [navigation]);

    return (
          <LinearGradient //funciona como um container, como a view
            colors={["#2c004d", "#6a11cb"]} // cores do degradê
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
