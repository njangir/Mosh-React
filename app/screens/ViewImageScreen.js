import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" size={35} color="white" />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={35}
                    color="white"
                />
            </View>
            <Image
                resizeMode="contain"
                style={styles.pic}
                source={require("../assets/Image.jpeg")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    pic: {
        width: "100%",
        height: "100%",
    },
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30,
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30,
    },
});

export default ViewImageScreen;
