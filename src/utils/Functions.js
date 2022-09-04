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
  if (name.length < 2) return false;
  return true;
}

export function validatePassword(password) {
  return password.length >= 6;
}

export function validateConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}

export function validateStringInput(text) {
  return text.length > 0;
}
