import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import colors from "../config/colors";

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        width: "100%",
        height: 400,
        overflow: "hidden",
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        color: colors.black,
        marginBottom: 7,
    },
    image: {
        width: "100%",
        height: 300,
    },
    subTitle: {
        fontWeight: "bold",
        color: colors.secondary,
        fontSize: 25,
    },
});

export default Card;
