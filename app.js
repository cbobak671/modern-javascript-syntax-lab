//Ex. 1

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const nums2 = nums.map((currentElement) => {
  return currentElement * "2";
});
console.log(nums2);

//Ex's. 2 - 5

const pizzaToppings = ["Pineapple", "Olives", "Anchiovies"];

const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping);
console.log(secondTopping);

const car = {
  make: "Audi",
  model: "q5",
};

const { make, model } = car;

console.log(make);
console.log(model);

const controversialPizzaToppings = [...pizzaToppings];

console.log(controversialPizzaToppings);

const myCar = { ...car };

myCar.model = "q7";

console.log(car);
console.log(myCar);

//Ex. 6

const propertyName = "username";

const userProfile = {
  [propertyName]: "Chris",
};

console.log(userProfile);

//Ex. 8

function revealCatColor(noun = "cat", adjective = "white") {
  console.log(`The ${noun} is ${adjective}.`);
}

revealCatColor("dog", "yellow");

//Ex. 9

let pizza = "tasty";

console.log(pizza !== "tasty" ? "yum" : "yuck");

//Ex. 10
const localLangConfig = null;

const LANG = localLangConfig || 'en';

console.log('Language setting:', LANG);

const userSavedTheme = 'dark';

const USER_THEME = userSavedTheme || 'light';

console.log('User theme setting:', USER_THEME);

//Ex. 11
const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.cat?.name;
  
  console.log(cat);
  