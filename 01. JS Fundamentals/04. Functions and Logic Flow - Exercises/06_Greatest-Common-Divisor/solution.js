function greatestCD() {
    let gcd = function(a, b) {
        if ( ! b) {
            return a;
        }

        return gcd(b, a % b);
    };

    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);

    let greatestCommonDivisor = gcd(num1, num2);

    let spanResult = document.querySelector('#result');
    spanResult.textContent = greatestCommonDivisor;
}