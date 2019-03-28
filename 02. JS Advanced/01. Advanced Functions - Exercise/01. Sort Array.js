function solve(arr, sortType) {
    
    let numbers = Array.from(arr);
    let ascending = (a, b) => a - b;
    let descending = (a, b) => b - a;

    let sortingObj = {
        asc: numbers.sort(ascending),
        desc: numbers.sort(descending)
    }

    console.log(sortingObj[sortType]);
}


solve([14, 7, 17, 6, 8], "desc");