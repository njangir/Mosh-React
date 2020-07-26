import React from "react";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/Components/AppText";
import AppButton from "./app/Components/AppButton";
import Screen from "./app/Components/Screen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/Components/Icon";
import ListItem from "./app/Components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/Components/AppTextInput";

export default function App() {
    return (
        <Screen>
            <AppTextInput icon="email" />
        </Screen>
    );
}
