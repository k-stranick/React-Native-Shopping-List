/**
 * @format
 * @ts-check
 * @file ShoppingList/assets/images/index.ts
 * @description This file exports a collection of images used in the shopping list application.
 * Each image is imported from the local assets directory and is associated with a specific ingredient.
 * The images are key value pairs, where the key is a string representing the ingredient name,
 * and the value is the require statement for the image file (IMG URL).
 */
export const images: Record<string, any> = {
    bahn_pho: require("./bahn-pho.jpg"),
    black_vinegar: require("./black-vinegar.jpg"),
    bok_choy: require("./bok-choy.jpg"),
    carrot: require("./carrot.jpg"),
    chive: require("./chive.jpg"),
    cilantro: require("./cilantro.jpg"),
    daikon: require("./daikon.jpg"),
    fish_sauce: require("./fish-sauce.jpg"),
    gai_lan: require("./gai-lan.jpg"),
    garlic: require("./garlic.jpg"),
    ginger: require("./ginger.jpg"),
    green_onion: require("./green-onion.jpg"),
    mirin: require("./mirin.jpg"),
    oyster_sauce: require("./oyster-sauce.jpg"),
    peppers: require("./peppers.jpg"),
    red_onion: require("./red-onion.jpg"),
    scallops: require("./scallops.jpg"),
    sesame_oil: require("./sesame-oil.jpg"),
    sesame_seed: require("./sesame-seed.jpg"),
    shallot: require("./shallot.jpg"),
    shao_xing_wine: require("./shao-xing-wine.jpg"),
    tamari: require("./tamari.jpg"),
    thai_basil: require("./thai-basil.jpg"),
    thai_chili: require("./thai-chili.jpg"),
    yu_chow_sum: require("./yu-chow-sum.jpg"),
};

export type ImageKey = keyof typeof images;
