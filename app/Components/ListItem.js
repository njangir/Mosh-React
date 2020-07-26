import React from "react";
import { View, Image, StyleSheet, TouchableNativeFeedback } from "react-native";
import Swipable from "react-native-gesture-handler/Swipeable";

import AppText from "../Components/AppText";
import colors from "../config/colors";

function ListItem({
    title,
    subTitle,
    image,
    IconComponent,
    onPress,
    renderRightActions,
}) {
    return (
        <Swipable renderRightActions={renderRightActions}>
            <TouchableNativeFeedback onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && (
                            <AppText style={styles.subTitle}>
                                {subTitle}
                            </AppText>
                        )}
                    </View>
                </View>
            </TouchableNativeFeedback>
        </Swipable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: "500",
    },
    subTitle: {
        color: colors.medium,
    },
});

export default ListItem;
