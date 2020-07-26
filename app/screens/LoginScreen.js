import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";

import Screen from "../Components/Screen";
import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";

function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
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
                textContentType="emailAddress"
                onChangeText={(text) => setEmail(text)}
            ></AppTextInput>
            <AppTextInput
                icon="lock"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                onChangeText={(text) => setPassword(text)}
            ></AppTextInput>
            <AppButton
                title="Login"
                onPress={() => console.log(email, password)}
            ></AppButton>
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
