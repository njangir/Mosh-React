import React from "react";
import {
    ImageBackground,
    RefreshControlBase,
    StyleSheet,
    Image,
    View,
    Text,
    Alert,
} from "react-native";

import AppButton from "../Components/AppButton";

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={10}
            source={require("../assets/BackgroundImage.jpg")}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/icon.png")}
                />
                <Text style={styles.tagline}>Sells what we don't need!</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login"></AppButton>
                <AppButton title="Register" color="secondary"></AppButton>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        height: "100%",
        flexDirection: "column-reverse",
        alignItems: "center",
    },
    buttonContainer: {
        padding: 20,
        width: "100%",
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 100,
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    },
});

export default WelcomeScreen;
