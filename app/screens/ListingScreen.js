import React from "react";
import Screen from "../Components/Screen";
import { FlatList } from "react-native-gesture-handler";
import Card from "../Components/Card";

const Listings = [
    {
        title: "Couch",
        subtitle: 100,
        image: require("../assets/couch.jpg"),
    },
    {
        title: "Jacket",
        subtitle: 100,
        image: require("../assets/jacket.jpg"),
    },
];

function ListingScreen(props) {
    return (
        <Screen>
            <FlatList
                data={Listings}
                keyExtractor={(Listing) => Listing.title}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.subtitle}
                        image={item.image}
                    />
                )}
            />
        </Screen>
    );
}

export default ListingScreen;
