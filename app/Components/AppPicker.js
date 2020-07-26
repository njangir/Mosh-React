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

/* const categories = [
    {
        label: "Furniture",
        value: "1",
    },
    {
        label: "Clothing",
        value: "2",
    },
]; */

function AppPicker({
    icon,
    selectedItem,
    placeholder,
    onSelectItem,
    items,
    PickerItemComponent = PickerItem,
}) {
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
                    {selectedItem ? (
                        <AppText style={[defaultStyles.text, styles.text]}>
                            {selectedItem.label}
                        </AppText>
                    ) : (
                        <AppText
                            style={[defaultStyles.text, styles.placeholder]}
                        >
                            {placeholder}
                        </AppText>
                    )}
                    <MaterialCommunityIcons
                        name="chevron-down"
                        color={defaultStyles.colors.medium}
                        size={20}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={isModalVisible} animationType="slide">
                <FlatList
                    data={items}
                    keyExtractor={items.value}
                    renderItem={({ item }) => (
                        <PickerItemComponent
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
    placeholder: {
        flex: 1,
        color: defaultStyles.colors.medium,
    },
});
export default AppPicker;
