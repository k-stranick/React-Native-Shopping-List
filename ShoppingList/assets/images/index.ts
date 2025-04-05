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
    bahn_pho: require("./grocery/bahn-pho.jpg"),
    black_vinegar: require("./grocery/black-vinegar.jpg"),
    bok_choy: require("./grocery/bok-choy.jpg"),
    carrot: require("./grocery/carrot.jpg"),
    chive: require("./grocery/chive.jpg"),
    cilantro: require("./grocery/cilantro.jpg"),
    daikon: require("./grocery/daikon.jpg"),
    fish_sauce: require("./grocery/fish-sauce.jpg"),
    gai_lan: require("./grocery/gai-lan.jpg"),
    garlic: require("./grocery/garlic.jpg"),
    ginger: require("./grocery/ginger.jpg"),
    green_onion: require("./grocery/green-onion.jpg"),
    jalapeno: require("./grocery/jalapeno.jpg"),
    mirin: require("./grocery/mirin.jpg"),
    oyster_sauce: require("./grocery/oyster-sauce.jpg"),
    peppers: require("./grocery/peppers.jpg"),
    red_onion: require("./grocery/red-onion.jpg"),
    scallops: require("./grocery/scallops.jpg"),
    sesame_oil: require("./grocery/sesame-oil.jpg"),
    sesame_seed: require("./grocery/sesame-seed.jpg"),
    shallot: require("./grocery/shallot.jpg"),
    shao_xing_wine: require("./grocery/shao-xing-wine.jpg"),
    tamari: require("./grocery/tamari.jpg"),
    thai_basil: require("./grocery/thai-basil.jpg"),
    thai_chili: require("./grocery/thai-chili.jpg"),
    yu_chow_sum: require("./grocery/yu-chow-sum.jpg"),
};

export type ImageKey = keyof typeof images;
