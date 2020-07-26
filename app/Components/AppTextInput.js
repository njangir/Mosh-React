import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/defaultStyles";

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    color={defaultStyles.colors.medium}
                    size={20}
                    style={styles.icon}
                />
            )}
            <TextInput
                placeholderTextColor={defaultStyles.colors.medium}
                style={defaultStyles.text}
                {...otherProps}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 15,
    },
    icon: {
        marginRight: 10,
    },
});
export default AppTextInput;
