import React, { useState } from "react";
import { View, Text, FlatList, useWindowDimensions } from "react-native";
import { GroceryItemCard } from "../components/ItemCard/ItemCard";
import { Item } from "../types/interfaces/grocery/GroceryItem.types";
import { styles } from "./HomeScreen.style";
import shoppingListData from "../data/grocery-items.json";

export function HomeScreen() {
  const [cart, setCart] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const { width } = useWindowDimensions();
  const numColumns = Math.floor(width / 200); // Adjust the number of columns based on screen width

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drunken Noodle Shopping List</Text>

      <FlatList
        data={shoppingListData}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        renderItem={({ item }) => (
          //<GroceryItemCard item={item} handleButton={addToCart} /> //Generates Add To Cart Button
          <GroceryItemCard item={item} handlePress={() => addToCart(item)} />
        )}
        contentContainerStyle={styles.listContainer}
        // columnWrapperStyle={styles.columnWrapper}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <Text style={styles.cartTitle}>Shopping Cart: {cart.length}</Text>
    </View>
  );
}
