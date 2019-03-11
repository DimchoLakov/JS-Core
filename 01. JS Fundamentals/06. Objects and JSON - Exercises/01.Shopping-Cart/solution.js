function solve() {
    let addButtons = document.querySelectorAll(".product button");

    let boughtProducts = [];
    let total = 0;

    for (let button of addButtons) {
        button.addEventListener("click", function (e) {
            let target = e.target;
            let parentNode = target.parentNode;
            let children = parentNode.children;

            let productName = children[1].textContent;
            let priceAsStr = children[2].textContent.split(/[:\s]+/g).filter(x => x !== "")[1];
            let price = Number(priceAsStr);

            total += price;

            if (!boughtProducts.includes(productName)) {
                boughtProducts.push(productName);
            }

            let message = `Added ${productName} for ${price} to the cart.\n`;

            let textarea = document.querySelector("textarea");
            textarea.textContent += message;
        })
    }

    let buyButton = document.querySelectorAll("button")[3];

    buyButton.addEventListener("click", function (e) {

        let message = `You bought ${boughtProducts.join(", ")} for ${total.toFixed(2)}.\n`;

        let textarea = document.querySelector("textarea");
        textarea.textContent += message;
    });
}