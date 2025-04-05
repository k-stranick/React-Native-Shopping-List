import shoppingListData from "../../data/grocery-items.json";
import React from "react";
import { View, Text, FlatList } from "react-native";
import { StyleSeparator } from "../../components/Separator";
import { ItemCard } from "../../components/ItemCard/ItemCard";
import { Item } from "../../types/interfaces/products/Product.types";
import { styles } from "./HomeScreen.style";
import { useResponsiveColumns } from "../../hooks/useResponsiveColumns";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { addToCart as addToCartAction } from "../../redux/slices/cartSlice";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const addToCart = (item: Item) => {
    dispatch(addToCartAction(item));
  };

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

      <Text style={styles.cartTitle}>Shopping Cart: {cartItems.length}</Text>
    </View>
  );
}
