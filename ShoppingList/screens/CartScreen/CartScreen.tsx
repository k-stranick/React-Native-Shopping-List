// app/screens/CartScreen.tsx
import React from "react";
import { View, Text, FlatList } from "react-native";

export default function CartScreen() {
  //   const { cart } = useCart();
  const cart = useSelector((state) => state.cart.items); // Assuming you have a Redux store set up

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>
            {item.name} x {item.quantity}
          </Text>
        )}
        ListEmptyComponent={<Text>Your cart is empty.</Text>}
      />
    </View>
  );
}
