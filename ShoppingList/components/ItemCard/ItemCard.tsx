import { images } from "../../assets/images";
import { styles } from "./ItemCard.style";
import { GroceryItemCardProps } from "../../types/interfaces/grocery/GroceryItem.types";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";

//TODO:RENAME addToCart and onPress to be more descriptive for card press and add to cart or button display and press and add to cart

export function GroceryItemCard(props: Readonly<GroceryItemCardProps>) {
  const { item, handlePress, handleButton } = props;

  const handleCardPress = () => {
    if (handlePress) handlePress();
  };

  const handleAddToCart = (e: any) => {
    e.stopPropagation();
    if (handleButton) handleButton(item);
  };

  return (
    <Pressable style={styles.card} onPress={handleCardPress}>
      {renderCardContent(item, handleButton ? handleAddToCart : undefined)}
    </Pressable>
  );
}

function renderCardContent(
  item: GroceryItemCardProps["item"],
  handleAddToCart?: (e: any) => void
) {
  return (
    <>
      <Image
        source={images[item.image]}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>

        {handleAddToCart && (
          <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}
