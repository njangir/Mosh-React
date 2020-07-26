import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../Components/Screen";
import {
    AppForm,
    AppFormField,
    SubmitButton,
    AppFormPicker,
} from "../Components/form";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().required().min(10).label("Description"),
    category: Yup.object().required().nullable().label("Category"),
});

const categories = [
    {
        label: "Category 1",
        value: 1,
    },
    {
        label: "Category 2",
        value: 2,
    },
    {
        label: "Category 3",
        value: 3,
    },
];

function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}
                onSubmit={() => console.log("Submitted")}
                validationSchema={validationSchema}
            >
                <AppFormField
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                ></AppFormField>
                <AppFormField
                    maxLength={8}
                    name="price"
                    keyboardType="numeric"
                    placeholder="Price"
                ></AppFormField>
                <AppFormPicker
                    name="category"
                    items={categories}
                    placeholder="Category"
                />
                <AppFormField
                    name="description"
                    placeholder="Description"
                    autoCorrect
                    multiline
                    numberOfLines={3}
                ></AppFormField>
                <SubmitButton title="POST" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        alignSelf: "center",
    },
});

export default ListingEditScreen;
