// Created by: Samuel Mundo
// 08/01/2023 -- MM/DD/YYYY
// Print active records from a Users array that include Name, date, Favorite movie.

import { users } from "./users_data";
import { updateLastRun, printActiveUsers, sortArray } from "./utils";

const main = () => {
  console.log("Printing active users\n");
  updateLastRun(users);
  printActiveUsers(users);

  console.log("Printing active sorted users\n");
  sortArray(users, "Favorite Movie");
  printActiveUsers(users);
};

main();
