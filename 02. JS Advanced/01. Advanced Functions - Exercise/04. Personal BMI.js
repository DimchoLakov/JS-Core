function solve() {

    class PersonalInfo {
        constructor(age, weight, height) {
            this.age = age;
            this.weight = weight;
            this.height = height;
        }
    }

    class Person {
        constructor(name, BMI, status, personalInfo) {
            this.name = name;
            this.personalInfo = personalInfo;
            this.BMI = BMI;
            this.status = status;
        }
    }

    let name = arguments[0];
    let age = Number(arguments[1]);
    let weight = Number(arguments[2]);
    let height = Number(arguments[3]);

    let personalInfo = new PersonalInfo(age, weight, height);
    let bmi = calculateBMI(weight, height);
    let status = getStatus(bmi);

    let person = new Person(name, bmi, status, personalInfo);

    if (status === "obese") {
        person.recommendation = "admission required";
    }
    console.log(person);
    return person;

    function getStatus(b) {
        let s = "";
        switch (true) {
            case (b < 18.5):
                s = "underweight";
                break;
            case (b < 25):
                s = "normal";
                break;
            case (b < 30):
                s = "overweight";
                break;
            case (b >= 30):
                s = "obese";
                break;
        }
        return s;
    }

    function calculateBMI(w, h) {
        return Math.round((w / ((h / 100) ** 2)));
    }
}


solve('Honey Boo Boo', 9, 57, 137);