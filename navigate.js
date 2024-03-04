import React from "react";
import Main from "./components/Main";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stacke = createStackNavigator();

export default function navigate() {
    return <NavigationContainer>
        <Stacke.Navigator>
            <Stacke.Screen 
                name = 'Main'
                component={Main}
            />

        </Stacke.Navigator>

    </NavigationContainer>;
}