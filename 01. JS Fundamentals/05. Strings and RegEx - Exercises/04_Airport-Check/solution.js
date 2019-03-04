function solve() {
    let input = document.querySelector('#str').value;
    let tokens = input.split(',').filter(x => x !== '');

    let text = tokens[0];
    let amountOfInfo = tokens[1].trim();

    let passengerPattern = /\s(([A-Z][A-Za-z]*)\-((([A-Z][A-Za-z]*\.)\-([A-Z][A-Za-z]*))|([A-Z][A-Za-z]*)))/;
    let airportPattern = /\s([A-Z]{3}\/[A-Z]{3})\s/;
    let flightPattern = /\s([A-Z]{1,3}\d{1,5})\s/;
    let companyPattern = /-\s([A-Z][A-Za-z]*\*[A-Z][A-Za-z]*)\s/;

    let name = text.match(passengerPattern)[1].trim();
    let airport = text.match(airportPattern)[1].trim();
    let flight = text.match(flightPattern)[1].trim();
    let company = text.match(companyPattern)[1].trim();

    name = name.replace(new RegExp(/-/, 'g'), ' ');
    company = company.replace(new RegExp(/\*/), ' ');

    let airportTokens = airport.split('/').filter(x => x !== '');
    let from = airportTokens[0];
    let to = airportTokens[1];

    let result = '';

    if (amountOfInfo === 'name') {
        result = `Mr/Ms, ${name}, have a nice flight!`;
    } else if (amountOfInfo === 'company') {
        result = `Have a nice flight with ${company}.`;
    } else if (amountOfInfo === 'flight') {
        result = `Your flight number ${flight} is from ${from} to ${to}.`;
    } else if (amountOfInfo === 'all') {
        result = `Mr/Ms, ${name}, your flight number ${flight} is from ${from} to ${to}. Have a nice flight with ${company}.`
    }

    let spanResult = document.querySelector('#result');
    spanResult.textContent = result;
}