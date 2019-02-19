function getNext() {
    function getHailStoneSeq(n) {
        let seq = [n];

        while (n !== 1) {
            if (n % 2 === 0) {
                n /= 2
            } else {
                n = (n * 3) + 1;
            }
            seq.push(n)
        }

        return seq.join(' ')
    }

    let num = Number(document.querySelector('#num').value);

    let hailStoneSequence = getHailStoneSeq(num);

    let spanResult = document.querySelector('#result');
    spanResult.textContent = hailStoneSequence + " ";
}