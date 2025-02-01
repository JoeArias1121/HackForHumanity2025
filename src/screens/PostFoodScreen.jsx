import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function PostFoodScreen({ navigation }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [items, setItems] = useState("");
  const [location, setLocation] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Food Post Form</Text>
      <TextInput
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginVertical: 5 }}
      />
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={setDate}
        style={{ borderWidth: 1, marginVertical: 5 }}
      />
      <TextInput
        placeholder="Items"
        value={items}
        onChangeText={setItems}
        style={{ borderWidth: 1, marginVertical: 5 }}
      />
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
        style={{ borderWidth: 1, marginVertical: 5 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button title="Post" onPress={() => navigation.navigate("Home")} />
      </View>
    </View>
  );
}
