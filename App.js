import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//Main Page At Beginning Of App
const MainPage = ({ navigation }) => {
    const [posts, setPosts] = useState([
        { id: '1', name: 'John', date: 'Jan 30', items: 'Bread, Milk', location: '123 Main St' },
        { id: '2', name: 'Anna', date: 'Feb 1', items: 'Canned Food', location: '456 Elm St' },
    ]);

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Food Redistribution App</Text>
            <Button title="Post Food" onPress={() => navigation.navigate('PostFood')} />
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('FoodInfo', { post: item })}>
                        <Text style={{ padding: 10, borderBottomWidth: 1 }}>{item.name} - {item.items}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

//Post Food Page Where Users Fill Out Forms For Food List
const PostFood = ({ navigation }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [items, setItems] = useState('');
    const [location, setLocation] = useState('');

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Food Post Form</Text>
            <TextInput placeholder="Your Name" value={name} onChangeText={setName} style={{ borderWidth: 1, marginVertical: 5 }} />
            <TextInput placeholder="Date" value={date} onChangeText={setDate} style={{ borderWidth: 1, marginVertical: 5 }} />
            <TextInput placeholder="Items" value={items} onChangeText={setItems} style={{ borderWidth: 1, marginVertical: 5 }} />
            <TextInput placeholder="Location" value={location} onChangeText={setLocation} style={{ borderWidth: 1, marginVertical: 5 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Button title="Back" onPress={() => navigation.goBack()} />
                <Button title="Post" onPress={() => navigation.navigate('Main')} />
            </View>
        </View>
    );
};

//Food information page users are brought to when selecting a food posting
const FoodInfo = ({ route, navigation }) => {
    const { post } = route.params;

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Claim The Goods</Text>
            <Text>Name: {post.name}</Text>
            <Text>Date: {post.date}</Text>
            <Text>Items: {post.items}</Text>
            <Text>Location: {post.location}</Text>
            <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={MainPage} />
                <Stack.Screen name="PostFood" component={PostFood} />
                <Stack.Screen name="FoodInfo" component={FoodInfo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
