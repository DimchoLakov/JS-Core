// 1. I like JavaScript!
function jsMsg(input) {
    console.log(`Hello ${input}, do you like JavaScript?`);
}


// 02. Even Numbers 1 to N
function getEvenNumbers(n) {
    n = Number(n);

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}


// 03. Fruit
function getFruitInfo(fruit, weight, price) {
    weight = weight / 1000;
    price = price * weight;
    console.log(`I need ${price.toFixed(2)} leva to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}


// 04. Fitness Rates
function getFitnessRates(day, service, time) {

    let dayOfWeek = function getDayOfWeek(day) {
        let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return days.indexOf(day);
    }

    let weekDay = {
        'Fitness': 5,
        'Sauna': 4,
        'Instructor': 10
    };

    let weekendDay = {
        'Fitness': 8,
        'Sauna': 7,
        'Instructor': 15
    };

    let currentDay = dayOfWeek(day);
    if (currentDay >= 0 && currentDay <= 4) {
        if (time <= 15) {
            console.log(weekDay[service]);
        }
        else {
            console.log(weekDay[service] + 2.5);
        }
    }
    else {
        console.log(weekendDay[service]);
    }
}


// 05. Greatest Common Divisor – GCD
function gcd(a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
};


// 06. Same Numbers
function areSameNumbers(input) {
    input = input.toString();
    let firstSymbol = Number(input[0]);

    let areEqual = true;
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber !== firstSymbol) {
            areEqual = false;
        }

        sum += Number(input[i]);
    }
    console.log(areEqual);

    console.log(sum);
}


// 07. Time to Walk
function getTime(steps, stepLength, speed) {
    let stepsCount = Number(steps);
    let stepSize = Number(stepLength);
    let speedInKmH = Number(speed);

    let distanceInMeters = (stepsCount * stepSize);
    let speedInMeterInSecond = speedInKmH / 60 / 60 * 1000;
    let breakTime = Math.floor(distanceInMeters / 500) * 60;

    let totalTimeInSeconds = distanceInMeters / speedInMeterInSecond + breakTime;

    let hours = Math.floor(totalTimeInSeconds / 60 / 60);
    let minutes = Math.floor(totalTimeInSeconds / 60);
    let seconds = Math.round(totalTimeInSeconds % 60);

    function formatOutput(hours, minutes, seconds) {
        if (hours < 10) {
            hours = '0' + hours.toString();
        }
        if (minutes < 10) {
            minutes = '0' + minutes.toString();
        }
        if (seconds < 10) {
            seconds = '0' + seconds.toString();
        }

        return `${hours}:${minutes}:${seconds}`;
    };

    let result = formatOutput(hours, minutes, seconds);

    console.log(result);
}


// 08. Flight Timetable
function getTimetable(input) {
    let arr = Array.from(input);
    let arrivalsOrDepartures = arr[0].toString();
    let town = arr[1].toString();
    let time = arr[2].toString();
    let flightNumber = arr[3].toString();
    let gateNumber = arr[4].toString();

    console.log(`${arrivalsOrDepartures}: Destination - ${town}, Flight - ${flightNumber}, Time - ${time}, Gate - ${gateNumber}`);
}

getTimetable(['Departures', 'London', '22:45', 'BR117', '42']);


// 09. Calorie Object
function getCaloriesInfo(input) {
    let array = Array.from(input);
    let obj = {};
    
    for(let i = 0; i < array.length - 1; i+=2){
        obj[array[i]] = Number(array[i + 1]);
    }
    console.log(obj);
}


getCaloriesInfo(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);