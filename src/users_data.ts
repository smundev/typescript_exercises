import type { User } from "./types";

//Objects definition
let rockyObj = {
  Name: "Rocky",
  "Favorite Food": "Sushi",
  "Favorite Movie": "Back to The Future",
  Status: "Inactive",
};
let miroslavObj = {
  Name: "Miroslav",
  "Favorite Food": "Sushi",
  "Favorite Movie": "American Psycho",
  Status: "Inactive",
};
let donnyObj = {
  Name: "Donny",
  "Favorite Food": "Singapore chow mei fun",
  "Favorite Movie": "The Princess Bride",
  Status: "Inactive",
};
let mattObj = {
  Name: "Matt",
  "Favorite Food": "Brisket Tacos",
  "Favorite Movie": "The Princess Bride",
  Status: "Inactive",
};

let samObj = {
  Name: "Sam",
  "Favorite Food": "Meat Balls",
  "Favorite Movie": "Back to The Future",
  Status: "Inactive",
};
export const users: User[] = [rockyObj, miroslavObj, donnyObj, mattObj, samObj];
