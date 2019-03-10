function solve(arr) {

    let productsMap = new Map();

    for (let str of arr) {
        let tokens = str.split(/[\|]+/g).filter(x => x !== "");
        let town = tokens[0];
        let product = tokens[1];
        let price = Number(tokens[2]);

        if (!productsMap.has(product)) {
            productsMap.set(product, new Map());
        }

        productsMap.get(product).set(town, price);
    }

    for (let [product, townPricePair] of productsMap) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let searchedTown = "";

        for (let [town, price] of townPricePair) {
            if (price < lowestPrice) {
                lowestPrice = price;
                searchedTown = town.trim();
            }
        }

        console.log(`${product}-> ${lowestPrice} (${searchedTown})`);
    }

}


solve(
    [
        "Sample Town | Sample Product | 1000",
        "Sample Town | Orange | 2",
        "Sample Town | Peach | 1",
        "Sofia | Orange | 3",
        "Sofia | Peach | 2",
        "New York | Sample Product | 1000.1",
        "New York | Burger | 10"
    ]
);