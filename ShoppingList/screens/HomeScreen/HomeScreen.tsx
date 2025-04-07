import shoppingListData from "../../data/grocery-items.json";
import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { StyleSeparator } from "../../components/Separator";
import { ItemCard } from "../../components/ItemCard/ItemCard";
import { Item } from "../../types/interfaces/products/Product.types";
import { styles } from "./HomeScreen.style";
import { useResponsiveColumns } from "../../hooks/useResponsiveColumns";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { addToCart as addToCartAction } from "../../redux/slices/cartSlice";

import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../types/interfaces/navigation.types"; // adjust path as needed

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
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drunken Noodle Shopping List</Text>
      <Pressable
        onPress={() => navigation.navigate("Cart")}
        style={{
          backgroundColor: "#f4511e",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          alignSelf: "flex-start",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Go to Cart</Text>
      </Pressable>
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
