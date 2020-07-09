class Bank {
    #bankName

    constructor(name) {
        this.#bankName = name;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        const existingCustomer = this.allCustomers.find(x => {
            return x.personalId === customer.personalId
        });

        if (existingCustomer !== undefined) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);

        return customer;
    }

    depositMoney(personalId, amount) {
        const customer = this.allCustomers.find(x => {
            return x.personalId === personalId
        });

        if (customer === undefined) {
            throw new Error(`We have no customer with this ID!`);
        }

        if (customer.totalMoney === undefined) {
            customer.totalMoney = amount;
        } else {
            customer.totalMoney += amount;
        }

        if (!customer.hasOwnProperty('transactions')) {
            customer.transactions = [];
        }

        customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        const customer = this.allCustomers.find(x => {
            return x.personalId === personalId
        });
        if (customer === undefined) {
            throw new Error(`We have no customer with this ID!`);
        }

        if ((customer.totalMoney < amount) || customer.totalMoney === undefined) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        } else {
            customer.totalMoney -= amount;

            customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);
        }

        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        const customer = this.allCustomers.find(x => {
            return x.personalId === personalId
        });
        if (customer === undefined) {
            throw new Error('We have no customer with this ID!');
        }

        let result = [];

        result.push(`Bank name: ${this.#bankName}`);
        result.push(`Customer name: ${customer.firstName} ${customer.lastName}`);
        result.push(`Customer ID: ${customer.personalId}`);
        result.push(`Total Money: ${customer.totalMoney}$`);
        result.push('Transactions:');

        let transactions = [];
        customer.transactions.forEach((el, i) => {
            transactions.unshift(`${i + 1}. ${el}`);
        });

        transactions.forEach(el => {
            result.push(el);
        });

        return result.join('\n');
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));