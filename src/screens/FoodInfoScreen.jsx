import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function FoodInfoScreen({ route, navigation }) {
  const { post } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Claim The Goods</Text>
      <Text>Name: {post.name}</Text>
      <Text>Date: {post.date}</Text>
      <Text>Items: {post.items}</Text>
      <Text>Location: {post.location}</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
