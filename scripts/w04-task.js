/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Mark Calla",
    photo: "images/myPick.jpeg",
    favoriteFoods: [
        'Ceviche',
        'Aji de Gallina',
        'Lomo Saltado',
        'Picante a la Tacneña',
        'Anticuchos'
    ],
    hobbies: [
        'Play soccer',
        'Play MOBA',
        'Ride my bike'
    ],
    placesLived:[],
    
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Asuncion, Paraguay',
        length: '2 years'
    },
    {
        place: 'Azangaro, Peru',
        length: '2 years'
    },
    {
        place: 'Tacna, Peru',
        length: '23 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(places => {
    const dt = document.createElement('dt');
    dt.textContent = places.place;
    document.querySelector('#places-lived').appendChild(dt);

    const dd = document.createElement('dd');
    dd.textContent = places.length;
    document.querySelector('#places-lived').appendChild(dd);
})

