function solve() {
    let arr = JSON.parse(document.querySelector('#arr').value);

    let pattern = /^([A-Z][a-z]*\s[A-Z][a-z]*)\s(\+359(\s|\-)\d\3\d{3}\3\d{3})\s([a-z]+\@[a-z\d]+\.[a-z]{2,3})$/;



    let spanResult = document.querySelector('#result');

    for (let element of arr) {
        let matches = pattern.exec(element);

        if (matches) {
            let name = matches[1];
            let phone = matches[2];
            let email = matches[4];

            let nameParagraph = document.createElement('p');
            nameParagraph.textContent = `Name: ${name}`;
            let phoneParagraph = document.createElement('p');
            phoneParagraph.textContent = `Phone Number: ${phone}`;
            let emailParagraph = document.createElement('p');
            emailParagraph.textContent = `Email: ${email}`;
            let separatorParagraph = document.createElement('p');
            separatorParagraph.textContent = '- - -';

            spanResult.appendChild(nameParagraph);
            spanResult.appendChild(phoneParagraph);
            spanResult.appendChild(emailParagraph);
            spanResult.appendChild(separatorParagraph);
        } else {
            let invalidDataParagraph = document.createElement('p');
            invalidDataParagraph.textContent = 'Invalid data';
            let separatorParagraph = document.createElement('p');
            separatorParagraph.textContent = '- - -';

            spanResult.appendChild(invalidDataParagraph);
            spanResult.appendChild(separatorParagraph);
        }
    }
}