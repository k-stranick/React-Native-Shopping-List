// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

/**
 * Single item component
 * Shows an item with name, image, and a button to add it to the cart.
 */
function ShoppingItem({
  item,
  onAddToCart,
}: {
  item: { id: string; name: string; imageUri: string };
  onAddToCart: (item: { id: string; name: string; imageUri: string }) => void;
}) {
  return (
    <View style={styles.itemContainer}>
      {/* Image */}
      <Image
        source={{ uri: item.imageUri }}
        style={styles.itemImage}
        resizeMode="cover"
      />
      {/* Name and "Add to Cart" Button */}
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => onAddToCart(item)}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/**
 * App Component
 * Displays a list of items, lets user add them to a cart,
 * and also shows the cart contents.
 */
export default function App() {
  // Hardcoded list of items available for purchase
  const shoppingList = [
    { id: "1", name: "Apples", imageUri: "https://via.placeholder.com/70" },
    { id: "2", name: "Bananas", imageUri: "https://via.placeholder.com/70" },
    { id: "3", name: "Milk", imageUri: "https://via.placeholder.com/70" },
    { id: "4", name: "Bread", imageUri: "https://via.placeholder.com/70" },
    { id: "5", name: "Eggs", imageUri: "https://via.placeholder.com/70" },
    { id: "6", name: "Cheese", imageUri: "https://via.placeholder.com/70" },
  ];

  // State to hold items in the cart
  const [cart, setCart] = useState<
    { id: string; name: string; imageUri: string }[]
  >([]);

  /**
   * Adds an item to the cart
   */
  interface ShoppingItemType {
    id: string;
    name: string;
    imageUri: string;
  }

  const addToCart = (item: ShoppingItemType): void => {
    // Add the selected item to the end of the cart array
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>My Shopping List</Text>

      {/* Display the list of items */}
      <FlatList
        data={shoppingList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ShoppingItem item={item} onAddToCart={addToCart} />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />

      {/* Title for Cart */}
      <Text style={styles.cartTitle}>Items in Cart</Text>

      {/* Display the cart items */}
      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item, index) => item.id + "-" + index}
          renderItem={({ item }) => (
            <Text style={styles.cartItem}>{item.name}</Text>
          )}
          // A little spacing between cart items
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        />
      )}
    </View>
  );
}

// Basic styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    padding: 10,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  itemTextContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: 18,
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: "#007aff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cartTitle: {
    fontSize: 22,
    marginTop: 30,
    marginBottom: 10,
    textAlign: "center",
  },
  emptyText: {
    textAlign: "center",
    fontStyle: "italic",
    color: "#999",
  },
  cartItem: {
    fontSize: 16,
    padding: 10,
    backgroundColor: "#e2e2e2",
    borderRadius: 6,
  },
});
