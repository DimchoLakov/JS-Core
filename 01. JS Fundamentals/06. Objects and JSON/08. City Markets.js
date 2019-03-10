function solve(arr) {

    let towns = {};

    for (let element of arr) {
        let tokens = element.split(/[\<\>\-\:]+/g)

        let townName = tokens[0].trim();
        let itemName = tokens[1].trim();
        let totalIncome = Number(tokens[2].trim()) * Number(tokens[3].trim());

        if (!towns.hasOwnProperty(townName)) {
            towns[townName] = {};
            towns[townName][itemName] = totalIncome;
        } else {
            if (!towns[townName].hasOwnProperty(itemName)) {
                towns[townName][itemName] = 0;
            }
            towns[townName][itemName] += totalIncome;
        }

    }

    let townKeys = Object.keys(towns);

    for (let townKey of townKeys) {
        console.log(`Town - ${townKey}`);

        let items = Object.keys(towns[townKey]);

        for (let item of items) {
            console.log(`$$$${item} : ${towns[townKey][item]}`);
        }
    }

}


solve(
    [
        "Sofia -> Laptops HP -> 200 : 2000",
        "Sofia -> Raspberry -> 200000 : 1500",
        "Sofia -> Audi Q7 -> 200 : 100000",
        "Montana -> Portokals -> 200000 : 1",
        "Montana -> Qgodas -> 20000 : 0.2",
        "Montana -> Chereshas -> 1000 : 0.3"
    ]
);