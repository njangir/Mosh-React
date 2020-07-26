import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../Components/ListItem";
import Screen from "../Components/Screen";
import ListItemSeparator from "../Components/ListItemSeparator";
import colors from "../config/colors";
import ListItemDeleteAction from "../Components/ListItemDeleteAction";

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/mosh.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/mosh.jpg"),
    },
];

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const HandleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id));
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => messages.id}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("message selected", item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => HandleDelete(item)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() =>
                    setMessages([
                        {
                            id: 2,
                            title: "T2",
                            description: "D2",
                            image: require("../assets/mosh.jpg"),
                        },
                    ])
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
