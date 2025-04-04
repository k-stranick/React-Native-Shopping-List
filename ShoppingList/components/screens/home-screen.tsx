import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { GroceryItemCard } from "../GroceryItemCard/grocery-item-card";
import { GroceryItem } from "../GroceryItemCard/grocery-item-types";
import { styles } from "./home-screen.style";

import shoppingListData from "../../data/groceryItems.json";

export function HomeScreen() {
  const [cart, setCart] = useState<GroceryItem[]>([]);

  const addToCart = (item: GroceryItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drunken Noodle Shopping List</Text>

      <FlatList
        data={shoppingListData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          //   <GroceryItemCard item={item} onAddToCart={addToCart} />
          <GroceryItemCard item={item} onCardPress={() => addToCart(item)} />
        )}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
        // columnWrapperStyle={styles.columnWrapper}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <Text style={styles.cartTitle}>Shopping Cart: {cart.length}</Text>
    </View>
  );
}
