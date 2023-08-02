import type { User } from "./types";

//Util function to add the current date to an object of type user
const addDate = (user: User) => {
  user["Last Run"] = new Date().toLocaleString();
  return user;
};

//Util function to update the last run date for all users
const updateLastRun = (users: User[]) => {
  return users.map(addDate);
};

//Util function to print ALL active users
const printActiveUsers = (users: User[]) => {
  let activeUsersCount = 0;
  users.forEach((user) => {
    if (user.Status === "Active") {
      console.log(
        `Name: ${user.Name}, Last Run: ${user["Last Run"]}, Favorite Movie: ${user["Favorite Movie"]}`
      );
      activeUsersCount++;
    }
  });
  if (activeUsersCount === 0) {
    console.log("No active users were found");
  }
};

//Util function to sort an array of objects by a given property - I used generics to make it reusable for any object
const sortArray = <T extends object>(array: T[], property: keyof T): T[] => {
  return array.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  });
};

export { updateLastRun, printActiveUsers, sortArray };
