import type { ImageKey } from "../../assets/images";


export interface GroceryItem {
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly image: ImageKey;
}


export interface GroceryItemCardProps {
    readonly item: GroceryItem;
    readonly onPress?: () => void; // Optional onPress function for when the card is pressed
    readonly onAddToCart?: (item: GroceryItem) => void; // Optional function to add item to cart
};