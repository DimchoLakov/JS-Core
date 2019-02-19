function solve() {
    let num = Number(document.querySelector('#num').value);

    let factors = getFactors(num);
    factors = factors.sort(sortNumber);

    let spanResult = document.querySelector('#result');
    spanResult.textContent = factors.join(" ");

    function sortNumber(a,b) {
        return a - b;
    }

    function getFactors(num) {
        const isEven = num % 2 === 0;
        let inc = isEven ? 1 : 2;
        let factors = [1, num];

        for (let curFactor = isEven ? 2 : 3; Math.pow(curFactor, 2) <= num; curFactor += inc) {
            if (num % curFactor !== 0) continue;
            factors.push(curFactor);
            let compliment = num / curFactor;
            if (compliment !== curFactor) factors.push(compliment);
        }

        return factors;
    }
}