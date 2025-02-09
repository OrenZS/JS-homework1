/**
 * Create an empty array to store company names.
 * Create a form with input and button. Create an ul for all the companies.
 * Connect them all in the JS file.
 * When the form is submitted, add the value of the input
 * into the array and display it in the ul.
 *
 * Challenge (required):
 * Add a 'Reset' button at the after the ul. When the button is clicked,
 * clear the children of the ul. Find a way to clear the array as well.
 */

const companyNames = [];
const ul = document.querySelector("ul");
const form = document.querySelector("#form");
const addCompanyButton = document.querySelector("#btn");
const addCompanyInput = document.querySelector("#addCompanyName");
const resetBtn = document.querySelector("#resetBtn");

for (const company of companyNames) {
  const li = document.createElement("li");
  li.textContent = company;
  ul.appendChild(li);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (addCompanyInput.value === "") return;

  companyNames.push(addCompanyInput.value);
  const li = document.createElement("li");
  li.textContent = addCompanyInput.value;
  ul.appendChild(li);
  addCompanyInput.value = "";
  console.log(companyNames);
});

resetBtn.addEventListener("click", () => {
  ul.replaceChildren();
  companyNames.length = 0;
  console.log(companyNames);
});
