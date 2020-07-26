import React, { useState } from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Modal,
    FlatList,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/defaultStyles";
import PickerItem from "./PickerItem";
import AppText from "./AppText";

const categories = [
    {
        label: "Furniture",
        value: "1",
    },
    {
        label: "Clothing",
        value: "2",
    },
];

function AppPicker({ icon, selectedItem, placeholder, onSelectItem }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setIsModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            color={defaultStyles.colors.medium}
                            size={20}
                            style={styles.icon}
                        />
                    )}
                    <AppText style={[defaultStyles.text, styles.text]}>
                        {selectedItem ? selectedItem.label : placeholder}
                    </AppText>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        color={defaultStyles.colors.medium}
                        size={20}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={isModalVisible} animationType="slide">
                <FlatList
                    data={categories}
                    keyExtractor={categories.value}
                    renderItem={({ item }) => (
                        <PickerItem
                            label={item.label}
                            onPress={() => {
                                setIsModalVisible(false);
                                onSelectItem(item);
                            }}
                        />
                    )}
                />
            </Modal>
        </>
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
    text: {
        flex: 1,
    },
    icon: {
        marginRight: 10,
    },
});
export default AppPicker;
