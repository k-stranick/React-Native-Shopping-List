import type { ImageKey } from "../../assets/images";


export interface GroceryItem {
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly image: ImageKey;
}

//TODO:RENAME addToCart
export interface GroceryItemCardProps {
    readonly item: GroceryItem;
    readonly onCardPress?: () => void; // Optional onPress function for when the card is pressed
    readonly onAddToCart?: (item: GroceryItem) => void; // Optional function to add item to cart with button (need to rename TODO:RENAME)
};