import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

function AppButton({ title, onPress, color = "primary" }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: colors[color] }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignContent: "center",
        padding: 15,
        borderRadius: 15,
        marginVertical: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textTransform: "capitalize",
        textAlign: "center",
    },
});
export default AppButton;
