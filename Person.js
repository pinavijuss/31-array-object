class Person {
    constructor(data) {
        this.data = data;

    }


    fullName() {
        console.log(`${this.data.firstname} ${this.data.lastname}`);
    }

    intro() {
        console.log(`Hi, my name is ${this.data.firstname} and I am ${this.data.age} old.`);

    }
    firstChild() {
        const child = this.data.children[0];
        console.log(`${child.firstname} ${child.lastname} (${child.age})`);

    }

    lastChild() {
        const child = this.data.children[1];
        console.log(`${child.firstname} ${child.lastname} (${child.age})`);

    }

    firstCar() {

        const car = this.data.cars[0];
        console.log(`${car.brand} ${car.model} (${car.color})`)
    }

    lastCar() {
        const car = this.data.cars[2];
        console.log(`${car.brand} ${car.model} (${car.color})`)
    }

    apartmentPrice() {

        const apartment = this.data.address;
        console.log(`${this.data.firstname} has an apartment for ${apartment.price} ${apartment.currency}.`)

    }

    children() {
        console.log(`This is a chidren of ${this.data.firstname} ${this.data.lastname}:`)
        let count = 0;
        for (let i = 0; i < this.data.children.length; i++) {
            const child = this.data.children[i];
            console.log(`${++count}. ${child.firstname} ${child.lastname} (${child.age})`)
        }
    }

    aliveChildren() {
        let count = 0;
        for (let i = 0; i < this.data.children.length; i++) {
            const childAlive = this.data.children[i];
            if (childAlive.alive === true) {
                count++;
            }
        }
        console.log(`${this.data.firstname} ${this.data.lastname} has only ${count} children alive.`)
    }
    autopark() {
        console.log(`This is Jonas cars:`)
        let count = 0;
        for (let i = 0; i < this.data.cars.length; i++) {
            const cars = this.data.cars[i];
            console.log(`${++count}. ${cars.brand} ${cars.model} (${cars.color})`)
        }
    }

    wherePersonLive() {
        const personAddress = this.data.address;
        console.log(`${this.data.firstname} is living at ${personAddress.city} ${personAddress.street} ${personAddress.houseNumber}`)


    }

    carPrice(index) {
        const id = index;
        const carPick = this.data.cars[id];
        console.log(`${carPick.brand} ${carPick.model} is purchased for ${carPick.price} ${carPick.currency}.`)
    }

    totalSpentForCars() {
        let count = 0;
        let totalPrice = 0;

        for (let i = 0; i < this.data.cars.length; i++) {
            const carPrice = this.data.cars[i].price;
            const currency = this.data.cars[i].currency;
            if (currency === 'Litas') {
                totalPrice += carPrice / 3.45;
            }
            if (currency === 'Euros') {

                totalPrice += carPrice;
            }
        }
        this.totalPrice = totalPrice;

        console.log(`Jonas has spent ${totalPrice.toFixed(2)} Euros for his cars.`)
    }

    totalSpentForApartments() {
        const appartment = this.data.address;

        console.log(`Jonas has spent ${appartment.price} ${appartment.currency} for his apartments.`)
    }
    totalSpendings() {
        let totalExpenses = this.totalPrice + this.data.address.price;

        console.log(`Jonas has spent ${totalExpenses.toFixed(2)} Euros tottaly.`);
    }
}

module.exports = Person;