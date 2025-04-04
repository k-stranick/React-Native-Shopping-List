import { images } from "../../assets/images";
import { styles } from "./grocery-item.style";
import { GroceryItemCardProps } from "./grocery-item-types";
import { View, Text, Image } from "react-native";

/**
 * @format
 * @file GroceryItemCard.tsx
 * @description This component renders a card for a grocery item.
 * It displays the item's image, name, and price.
 * The component is styled using a separate stylesheet.
 */
export const GroceryItemCard = ({
  item,
}: GroceryItemCardProps): JSX.Element => {
  return (
    <View style={styles.card}>
      <Image
        source={images[item.image]}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  );
};
