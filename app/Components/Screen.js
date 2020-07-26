import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

import Constants from "expo-constants";

function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={styles.container}>{children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    container: {
        margin: 10,
        paddingHorizontal: 20,
    },
});

export default Screen;
