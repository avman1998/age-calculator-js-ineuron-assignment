// const container;
const error = document.querySelector(".error");

const inputEle = document.querySelector(".container #dob");
const yearsEle = document.querySelector(".container #years");
const monthsEle = document.querySelector(".container #months");
const daysEle = document.querySelector(".container #days");
//Today's Date Code
const today = new Date();
let todayYear = today.getFullYear();
let todayMonth = today.getMonth();
let todayDate = today.getDate();
let dob_year = (dob_month = dob_date = 0);
let y = (m = d = 0);

//Month Array
let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function getAge() {
  let dob = new Date(inputEle.value);

  dob_year = dob.getFullYear();
  dob_month = dob.getMonth();

  dob_date = dob.getDate();
}

function calcAge() {
  if (dob_date > todayDate) {
    todayDate = todayDate + month[todayMonth];
  }

  if (dob_month > todayMonth) {
    todayMonth = todayMonth + 12;
    todayYear = todayYear - 1;
  }
  y = todayYear - dob_year;
  m = todayMonth - dob_month;
  if (m >= 12) {
    y = y + 1;
    m = m - 12;
  }
  d = todayDate - dob_date;
}

function displayAge() {
  getAge();
  if (todayYear == dob_year && todayMonth == dob_month) {
    if (todayDate < dob_date) {
      error.classList.remove("error");
      yearsEle.innerHTML = "";
      monthsEle.innerHTML = "";
      daysEle.innerHTML = "";
    } else {
      error.classList.add("error");
      calcAge();
      yearsEle.innerHTML = y;
      monthsEle.innerHTML = m;
      daysEle.innerHTML = d;
    }
  } else {
    if (
      (todayYear == dob_year && dob_month > todayMonth) ||
      dob_year > todayYear
    ) {
      error.classList.remove("error");
      yearsEle.innerHTML = "";
      monthsEle.innerHTML = "";
      daysEle.innerHTML = "";
    } else {
      error.classList.add("error");
      calcAge();
      yearsEle.innerHTML = y;
      monthsEle.innerHTML = m;
      daysEle.innerHTML = d;
    }
  }
}
inputEle.addEventListener("change", displayAge);

// const inputEle = document.querySelector(".container #dob");
// const yearsEle = document.querySelector(".container #years");
// const monthsEle = document.querySelector(".container #months");
// const daysEle = document.querySelector(".container #days");

// //Today's Date Code
// const today = new Date();
// let todayYear = today.getFullYear();
// let todayMonth = 1 + today.getMonth();
// let todayDate = today.getDate();

// //Month Array
// let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// // Taking date in datepicker
// inputEle.addEventListener("change", function (e) {
//   e.preventDefault();
//   let dob = new Date(inputEle.value);

//   let dob_year = dob.getFullYear();
//   let dob_month = dob.getMonth();

//   let dob_date = dob.getDate();
//   if (dob_date > todayDate) {
//     todayDate = todayDate + month[todayMonth - 1];
//     todayMonth = todayMonth - 1;
//   }

//   if (dob_month > todayMonth) {
//     todayMonth = todayMonth + 12;
//     todayYear = todayYear - 1;
//   }

//   const y = todayYear - dob_year;
//   const m = todayMonth - dob_month;
//   const d = todayDate - dob_date;

//   yearsEle.innerHTML = y;
//   monthsEle.innerHTML = m;
//   daysEle.innerHTML = d;
// });

// // function getAge() {}

// // function calcAge() {}

// // function displayAge() {}
