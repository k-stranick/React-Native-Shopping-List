import React, { useState } from "react";
import { View, Text, FlatList, useWindowDimensions } from "react-native";
import { ItemCard } from "../../components/ItemCard/ItemCard";
import { Item } from "../../types/interfaces/grocery/GroceryItem.types";
import { styles } from "./HomeScreen.style";
import shoppingListData from "../../data/grocery-items.json";
import { useOrientation } from "../../hooks/orientationHook";
import { Orientation } from "../../types/enums/Orientation.enum";

export function HomeScreen() {
  const [cart, setCart] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const { width } = useWindowDimensions();
  const rawColumns = Math.floor(width / 200);
  const numColumns = Math.max(1, Math.min(rawColumns, 4)); // between 1 and 4

  // const isTablet = width >= 768;
  // const numColumns = isTablet ? 3 : 2;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drunken Noodle Shopping List</Text>

      <FlatList
        data={shoppingListData}
        keyExtractor={(item) => item.id.toString()}
        key={numColumns}
        numColumns={numColumns}
        renderItem={({ item }) => (
          //<GroceryItemCard item={item} handleButton={addToCart} /> //Generates Add To Cart Button
          <ItemCard item={item} handlePress={() => addToCart(item)} />
        )}
        contentContainerStyle={styles.listContainer}
        // columnWrapperStyle={styles.columnWrapper}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <Text style={styles.cartTitle}>Shopping Cart: {cart.length}</Text>
    </View>
  );
}
