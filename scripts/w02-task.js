/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
/* Step 2 - Variables */
const fullName = "Mark Anthony Calla Vargaya";
const currentYear = '2024';
const profilePicture = 'images/myPick.jpeg'; 

const favFoods = ['Ceviche', 'Picante a la Tacneña', 'Aji de Gallina', 'Lomo Saltado', 'Anticucho'];
const addFood = ['Lemon Pie'];

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
const foodElement = document.getElementById('food');
const imageElement = document.querySelector('img').setAttribute('src', profilePicture);

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.innerHTML = currentYear;
foodElement.innerHTML = favFoods;

/* Step 5 - Array */

favFoods.push(addFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;




