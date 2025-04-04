import { images } from "../../assets/images";
import { styles } from "./grocery-item.style";
import { GroceryItemCardProps } from "./grocery-item-types";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";

// export function GroceryItemCard(props: Readonly<GroceryItemCardProps>) {
//   const { item, onPress, onAddToCart } = props;
//   const CardWrapper = onPress ? TouchableOpacity : View;

//   return (
//     <CardWrapper style={styles.card} onPress={onPress}>
//       <Image
//         source={images[item.image]}
//         style={styles.image}
//         resizeMode="cover"
//       />
//       <View style={styles.textContainer}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.price}>${item.price}</Text>

//         {onAddToCart && (
//           <TouchableOpacity
//             style={styles.addButton}
//             onPress={() => onAddToCart(item)}
//           >
//             <Text style={styles.addButtonText}>Add to Cart</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </CardWrapper>
//   );
// }

export function GroceryItemCard(props: Readonly<GroceryItemCardProps>) {
  const { item, onPress, onAddToCart } = props;
  const isPressable = typeof onPress === "function";

  return isPressable ? (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {renderCardContent(item, onAddToCart)}
    </TouchableOpacity>
  ) : (
    <View style={styles.card}>{renderCardContent(item, onAddToCart)}</View>
  );
}

// Helper function to render card content
function renderCardContent(
  item: GroceryItemCardProps["item"],
  onAddToCart: GroceryItemCardProps["onAddToCart"]
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

        {onAddToCart && (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => onAddToCart(item)}
          >
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}
