import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../Components/AppText";
import colors from "../config/colors";
import ListItem from "../Components/ListItem";

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image
                style={styles.image}
                source={require("../assets/jacket.jpg")}
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}> Red jacket for sale</AppText>
                <AppText style={styles.price}> 100$ </AppText>
            </View>
            <View style={styles.userContainer}>
                <ListItem
                    title="Naresh Jangir"
                    subTitle="Software Engineer"
                    image={require("../assets/mosh.jpg")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    price: {
        color: colors.secondary,
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 10,
    },
});

export default ListingDetailsScreen;
