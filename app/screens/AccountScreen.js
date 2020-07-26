import React from "react";
import Screen from "../Components/Screen";
import ListItem from "../Components/ListItem";
import { View, StyleSheet, FlatList } from "react-native";
import colors from "../config/colors";
import Icon from "../Components/Icon";
import AppText from "../Components/AppText";
import ListItemSeparator from "../Components/ListItemSeparator";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
    },
    {
        title: "Contact",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
    },
];

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="name"
                    subTitle="email"
                    image={require("../assets/mosh.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    )}
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor="#fe5d5d" />}
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,
    },
});
export default AccountScreen;
