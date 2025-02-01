import React, { useState } from "react";
import FoodStore from "@/stores/FoodStore";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {

  const [posts, setPosts] = useState(FoodStore());

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Food Redistribution App
      </Text>
      <Button
        title="Post Food"
        onPress={() => navigation.navigate("PostFood")}
      />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("FoodInfo", { post: item })}
          >
            <Text style={{ padding: 10, borderBottomWidth: 1 }}>
              {item.name} - {item.items}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
