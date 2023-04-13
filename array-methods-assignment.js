// Array Methods Assignment

// With the following data set, create function calls that use array methods from the previous lesson:

// const users = [
//     {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
//     {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
//     {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
//     {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
//     {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
//     {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
//     {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
//     {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
// ];
 

// Find a user named 'Jose'
// Get an array of all the premium members
// Get an array of all the user last names
// Get an array of the full names who have logged in more than 10 times
// Get the total number of logins for the list of users
 

// Complete all of the items and submit them via your GitHub repo. It might be a good idea to have one repo for all these JS assignments to push them all to one but only send the link to the file itself, not the whole repo if you do this. 

const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];


// Find a user named 'Jose'

let userJose = users.find(users => users.firstName == 'Jose')
//console.log(userJose); // Testing find jose function



// Get an array of all the premium members
let usersPrem = users.filter(function(users){
    return users.isPremiumMember != 'false';
})
//console.log(usersPrem); // Testing function that gets all the premium members



// Get an array of all the user last names
let usersLastName = users.map(function(users){
    return users.lastName;
})
//console.log(usersLastName);



// Get an array of the full names who have logged in more than 10 times

let usersLoginTen = users.filter(users => users.logins > 10).map(users => users.firstName +" "+ users.lastName);
console.log(usersLoginTen); //testing function


// Get the total number of logins for the list of users


let userLogTotal = users.map(users => users.logins).reduce(((login,total) => login+total),0);
//console.log(userLogTotal); testing function above
