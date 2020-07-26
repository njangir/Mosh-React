import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../Components/Screen";
import AppFormField from "../Components/form/AppFormField";
import SubmitButton from "../Components/form/SubmitButton";
import AppForm from "../Components/form/AppForm";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image
                source={require("../assets/icon.png")}
                style={styles.logo}
            ></Image>
            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={() => console.log("Submitted")}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="email"
                    icon="email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="emailAddress"
                ></AppFormField>
                <AppFormField
                    name="password"
                    icon="lock"
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="password"
                ></AppFormField>
                <SubmitButton title="Login" />
            </AppForm>
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
