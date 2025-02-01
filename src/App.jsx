import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '@/screens/HomeScreen';
import PostFoodScreen from "@/screens/PostFoodScreen";
import FoodInfoScreen from "@/screens/FoodInfoScreen";

const Stack = createStackNavigator();

//Main Page At Beginning Of App


//Post Food Page Where Users Fill Out Forms For Food List


//Food information page users are brought to when selecting a food posting


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="PostFood" component={PostFoodScreen} />
                <Stack.Screen name="FoodInfo" component={FoodInfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
