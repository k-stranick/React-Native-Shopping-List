import type { ImageKey } from "../../../assets/images";


export interface Item {
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly image: ImageKey;
}

//TODO:RENAME addToCart
export interface GroceryItemCardProps {
    readonly item: Item;
    readonly handlePress?: () => void; // Optional onPress function for when the card is pressed
    readonly handleButton?: (item: Item) => void; // Optional function to add item to cart with button (need to rename TODO:RENAME)
};