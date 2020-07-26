import React from "react";
import { StyleSheet } from "react-native";

import Screen from "../Components/Screen";
import AppTextInput from "../Components/AppTextInput";
import { TextInput } from "react-native-gesture-handler";

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image
                source={require("../assets/icon.png")}
                style={styles.logo}
            ></Image>
            <AppTextInput
                icon="email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            ></AppTextInput>
            <AppTextInput
                icon="lock"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
            ></AppTextInput>
            <AppButton></AppButton>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        alignSelf: "center",
    },
});

export default LoginScreen;
