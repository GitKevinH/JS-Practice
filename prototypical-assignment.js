// Step 1
function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods,){    
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods;
}


// Step 2
Person.prototype.fullname = function(){      
    return this.firstName.concat(this.lastName);
};


const kevin = new Person("Kevin", "Hoang", "Gray", 22, ["Spring rolls, Pho, Fried Chicken"]);

console.log(kevin.fullname()); // Testing fullname function

// Step 3
Person.prototype.toString = function(){ 
    return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}, Favorite foods: ${this.favoriteFoods}`
}

console.log(kevin.toString()); // Testing to.string function

// Step 4
Person.prototype.family = [];

console.log(kevin.family); // Testing for added empty array.
const annie = new Person("Annie", "Annison", "Red", 27, ["Burgers, Fries"]);

Person.prototype.addToFamily = function(member){
 if ((Person.prototype.family.indexOf(member) == -1)  && (member instanceof Person == true)){
        Person.prototype.family.push(member);
    return  console.log(Person.prototype.family.length);
 } else {
    return console.log("This member already exists!");
 }

}
kevin.addToFamily(annie); //Testing addToFamily function to see if it adds to array 
kevin.addToFamily(annie); //Checking if it does not allow for duplicate adding
// console.log(kevin.

