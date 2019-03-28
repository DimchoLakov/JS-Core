let manager = (() => {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: {
            carbohydrate: 1, flavour: 2
        },
        coke: {
            carbohydrate: 10, flavour: 20
        },
        burger: {
            carbohydrate: 5, fat: 7, flavour: 3
        },
        omelet: {
            protein: 5, fat: 1, flavour: 1
        },
        cheverme: {
            protein: 10, carbohydrate: 10, fat: 10, flavour: 10
        },
    };

    function report(ingredients) {
        let keys = Object.keys(ingredients);
        let message = "";
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let current = `${key}=${ingredients[key]} `;
            if (i === keys.length - 1) {
                current = current.trim();
            }
            message += current;
        }
        return message;
    }

    return function (input) {
        let tokens = input.split(" ").filter(x => x !== "");
        let command = tokens[0];
        let quantity = Number(tokens[2]);

        switch (command) {
            case "restock":

                let ingr = tokens[1];
                stock[ingr] += quantity;
                return "Success";

            case "prepare":

                let productName = tokens[1];
                let product = recipes[productName];
                let keys = Object.keys(product);
                let isStockEnough = keys.every(key => stock[key] >= product[key] * quantity);
                if (isStockEnough) {

                    for (let i = 0; i < quantity; i++) {
                        for (let key of keys) {
                            stock[key] -= product[key];
                        }
                    }
                    return "Success";

                } else {
                    let lowStockIngredient = keys.find(key => stock[key] < product[key] * quantity);
                    return `Error: not enough ${lowStockIngredient} in stock`;
                }

            case "report":
                return report(stock);
        }
    }

})();

/*manager("restock flavour 50");
manager("prepare coke 4");*/


console.log(manager("restock carbohydrate 10"));
;
console.log(manager("restock flavour 10"));
;
console.log(manager("prepare apple 1"));
;
console.log(manager("restock fat 10"));
;
console.log(manager("prepare burger 1"));
;
console.log(manager("report"));
;
