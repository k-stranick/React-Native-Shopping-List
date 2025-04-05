import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import CartScreen from "../../screens/CartScreen/CartScreen";

const stack = createNativeStackNavigator();

// import { Header } from "./Header";
// import { ShoppingList } from "../ShoppingList/ShoppingList";
// import { ShoppingListItem } from "../ShoppingListItem/ShoppingListItem";
// import { ShoppingListItemDetails } from "../ShoppingListItemDetails/ShoppingListItemDetails";
// import { ShoppingListItemEdit } from "../ShoppingListItemEdit/ShoppingListItemEdit";
// import { ShoppingListItemCreate } from "../ShoppingListItemCreate/ShoppingListItemCreate";
// import { ShoppingListItemDelete } from "../ShoppingListItemDelete/ShoppingListItemDelete";
// import { ShoppingListItemDeleteConfirmation } from "../ShoppingListItemDeleteConfirmation/ShoppingListItemDeleteConfirmation";
// import { ShoppingListItemDeleteSuccess } from "../ShoppingListItemDeleteSuccess/ShoppingListItemDeleteSuccess";

<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Cart" component={CartScreen} />
  </Stack.Navigator>
</NavigationContainer>;
