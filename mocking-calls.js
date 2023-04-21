let users = [
    { id: 1, name: "Rick", email: "rick@rick.com" },
    { id: 3, name: "Morty", email: "morty@morty.com" },
    { id: 4, name: "Meeseeks", email: "Meeseeks@Meeseeks.com" },
  ];
  
  function fetchUserById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find((user) => user.id === id);
        if (user) {
          resolve(user);
        } else {
          reject("Something went really, really wrong.");
        }
      }, 1000);
    });
  }
  
  fetchUserById(1) // This should return the object in the log
    .then((user) => console.log(user))
    .catch((error) => console.log(error));
  
  fetchUserById(2)  // This should show an error since there is no user with the ID of 2
    .then((user) => console.log(user))
    .catch((error) => console.log(error));
  