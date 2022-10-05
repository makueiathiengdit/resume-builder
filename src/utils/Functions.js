import { ERRORS } from "../constants/Constants";

export const fetchTemplates = () => {
  return [
    {
      id: 1,
      name: "Professional",
      image: "./images/template-1.jpg",
    },
    {
      id: 2,
      name: "Professional",
      image: "./images/template-2.jpg",
    },
    // {
    //   id: 3,
    //   name: "Professional",
    //   image: "./images/template-3.jpg",
    // },
    {
      id: 4,
      name: "Professional",
      image: "./images/template-4.jpg",
    },
    {
      id: 5,
      name: "Professional",
      image: "./images/template-1.jpg",
    },
    {
      id: 6,
      name: "Professional",
      image: "./images/template-2.jpg",
    },
    // {
    //   id: 7,
    //   name: "Professional",
    //   image: "./images/template-3.jpg",
    // },
    {
      id: 8,
      name: "Professional",
      image: "./images/template-4.jpg",
    },
  ];
};
export function validateEmail(email) {
  let pattern = /[d]+/;
  return email.match(pattern);
}

export function validateName(name) {
  if (name.length === 0) return ERRORS.get("username_errors").empty;
  else if (name.length < 2) return ERRORS.get("username_errors").short;
  else if (name.length > 30) return ERRORS.get("username_errors").long;
  else return "success";
}

export function validatePassword(password) {
  if (password.length === 0) return ERRORS.get("password_errors").empty;
  else if (password.length < 6) return ERRORS.get("password_errors").short;
  else if (password.length > 25) return ERRORS.get("password_errors").long;
  else return "success";
}

export function validateConfirmPassword(password, confirmPassword) {
  if (confirmPassword.length === 0) return ERRORS.get("password_errors").empty;
  else if (password !== confirmPassword)
    return ERRORS.get("password_errors").nomatch;
  else return "success";
}

export function validateStringInput(text) {
  return text.length > 0;
}
