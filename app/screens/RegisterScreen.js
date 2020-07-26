import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../Components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../Components/form";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(4).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={() => console.log("Submitted")}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="name"
                    icon="account"
                    autoCorrect={false}
                    textContentType="name"
                ></AppFormField>
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
                <SubmitButton title="Register" />
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

export default RegisterScreen;
