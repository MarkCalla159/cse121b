/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
/* I think this need to be a const, I mean the empty array*/
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        const img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);

        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}
/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    /*Here I understand why that wasn't a good idea*/ 
    templeList = await response.json(); 
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();

    const filter = document.querySelector('#filtered').value;
    switch(filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        /* here doesn't work if a use case nonutah because the value is nonutah*/
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) <= new Date("1950,01,01")));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
};

getTemples();

/* Event Listener */
document.querySelector('#filtered').addEventListener("change", () => {filterTemples(templeList)});