// this file will contain all constants
export const COLOURS = [
  "red",
  "green",
  "blue",
  "teal",
  "purple",
  "pink",
  "violet",
  "olive",
  "yellow",
  "orange",
  "grey",
];

let username_errors = {
  empty: "username cannot be empty",
  taken: "username already exists",
  short: "username must be atleast 5 characters",
  long: "username cannot exceed 15 characters",
};

let password_errors = {
  empty: "password cannot be empty",
  short: "password must be atleast 6 characters",
  long: "maximum password length is 25 characters",
  weak: "password is too weak",
  nomatch: "passwords do not match",
};

let name_errors = {
  empty: "field cannot be empty",
  short: "length should be atleast 2 characters",
  long: "maximum lenght is 30 characters",
  invalid: "field can contain only alphabets or -",
};

let email_errors = {
  empty: "field cannot be empty",
  invalid: "invalid email address",
};
export const ERRORS = new Map([
  ["username_errors", username_errors],
  ["password_errors", password_errors],
  ["name_errors", name_errors],
  ["email_errors", email_errors],
]);
