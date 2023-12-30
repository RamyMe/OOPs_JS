
// 1. class movie
class Movie {
    // Constructor
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        // If no rating is provided, set it to "PG" by default
        this.rating = rating || "PG";
    }

}

// Example usage
const movie1 = new Movie("Baahubali", "AVM Productions"); //to check the default rating
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
// Display information about the movie
console.log("Title: " + movie1.title);
console.log("Studio: " + movie1.studio);
console.log("Rating: " + movie1.rating);
console.log("Title: " + casinoRoyale.title);
console.log("Studio: " + casinoRoyale.studio);
console.log("Rating: " + casinoRoyale.rating);


//2.Convert the UML diagram to Typescript class. - use number for double
// this was not taken in todays class


//3. Write a “person” class to hold all the details.
class person{
    constructor(name,age,phone,email){
        this.name=(`Mr/Ms ${name}`);
        this.age=age;
        this.phone=(`+91 ${phone}`);
        this.email=email;
    }
    details(){
        console.log(`The person name is ${this.name}. Their age is ${this.age}. This person can be contacted with the given phone numer : ${this.phone} or the mentioned email ID ${this.email}.`);
    }
}

const newPerson= new person("Ramya","24","86992 76902","sampleme@gmail.com")
newPerson.details();

//4.write a class to calculate the uber price.

class uberprice_calculator{
    constructor(price_perkm,distance){
        this.price_perkm=price_perkm,
        this.distance=distance
    }
    calculate_price(){
        const total =this.price_perkm*this.distance;
        console.log(`The total fare for the travel is Rs${total}`)
        
    }
}
const travel1=new uberprice_calculator(10,35);
travel1.calculate_price();
