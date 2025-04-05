import shoppingListData from "../../data/grocery-items.json";
import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { StyleSeparator } from "../../components/Separator";
import { ItemCard } from "../../components/ItemCard/ItemCard";
import { Item } from "../../types/interfaces/products/Product.types";
import { styles } from "./HomeScreen.style";
import { useResponsiveColumns } from "../../hooks/useResponsiveColumns";
// import { useOrientation } from "../../hooks/orientationHook";
// import { Orientation } from "../../types/enums/Orientation.enum";

export function HomeScreen() {
  const [cart, setCart] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item]);
  }; //how does this know where the cart array is defined?

  const numColumns = useResponsiveColumns({
    minWidth: 200,
    minColumns: 1,
    maxColumns: 4,
  });

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
        ItemSeparatorComponent={StyleSeparator}
      />

      <Text style={styles.cartTitle}>Shopping Cart: {cart.length}</Text>
    </View>
  );
}
