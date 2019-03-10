function solve(arr) {

    let firstPattern = /[\s\|]+/;
    let secondPattern = /[\|]+/;
    let keys = arr[0].split(firstPattern).filter(x => x !== "");
    let towns = [];

    for (let town of arr.slice(1)) {
        let [townName, latitude, longitude] = town.split(secondPattern).filter(x => x !== "");
        let townObj = {
            [keys[0]]: townName.trim(),
            [keys[1]]: Number(latitude.trim()),
            [keys[2]]: Number(longitude.trim())
        };
        towns.push(townObj);
    }

    console.log(JSON.stringify(towns));
}

solve(
    [
        '| Town | Latitude | Longitude |',
        '| Veliko Turnovo | 43.0757 | 25.6172 |',
        '| Monatevideo | 34.50 | 56.11 |'
    ]
);