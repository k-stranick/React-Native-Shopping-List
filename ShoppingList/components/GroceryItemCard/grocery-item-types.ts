import type { ImageKey } from "../../assets/images";

/**
 * @format
 * @file GroceryItemCard/grocery-item-types.ts
 * @description This file defines the types used in the GroceryItemCard component.
 * It includes the GroceryItem type and the GroceryItemCardProps type.
 */

/**
 * @format
 * @file GroceryItemCard/grocery-item-types.ts
 * @description This file defines the GroceryItem type, which represents a grocery item.
 * It includes properties such as id, name, price, and image.
 * The image property is of type ImageKey, which is a key from the images object in the assets directory.
 * The images object contains the paths to the images used in the application.
 * The GroceryItem type is used in the GroceryItemCard component to display the item's details.
 * @typedef {Object} GroceryItem
 * @property {number} id - The unique identifier for the grocery item.
 * @property {string} name - The name of the grocery item.
 * @property {number} price - The price of the grocery item.
 * @property {ImageKey} image - The key for the image of the grocery item, which corresponds to a key in the images object.
 */
export type GroceryItem = {
    id: number;
    name: string;
    price: number;
    image: ImageKey;
}

/**
 * @format
 * @file GroceryItemCard/grocery-item-types.ts
 * @description This file defines the props type for the GroceryItemCard component.
 * It includes the GroceryItemCardProps type, which contains a single property item of type GroceryItem.
 * 
 * @typedef {Object} GroceryItemCardProps
 * @property {GroceryItem} item - The grocery item to be displayed in the card.
 * This property is required and should be passed to the GroceryItemCard component.
 * @example
 * const item: GroceryItem = {
 *  id: 1,
 *  name: "Carrot",
 *  price: 0.99,
 *  image: "carrot",
 * };
 */
export type GroceryItemCardProps = Readonly<{
    item: GroceryItem;
}>;