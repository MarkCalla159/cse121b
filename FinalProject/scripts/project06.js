/* Declare and initialize global variables */
const teamGrps = document.querySelector('#teams');
let teamList = [];
/* Mock io url*/
let url = 'https://run.mocky.io/v3/2b01cd5b-72b4-4e03-9713-0aba946d783c'

const displayTeams = (teams) =>{
    teams.forEach(team => {
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = team.name;

        const h4 = document.createElement('h4');
        h4.textContent = team.country;

        const img = document.createElement('img');
        img.setAttribute('src', team.image);

        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(img);
        teamGrps.appendChild(article);
    });
}

const getTeams = async () => {
    const response = await fetch(url);
    teamList = await response.json(); 
    displayTeams(teamList);
}

const filterGroups = (teams) => {
    reset();

    const filter = document.querySelector('#filtered').value;
    switch(filter) {
        case "groupA":
            displayTeams(teams.filter(team => team.group.includes('A')));
            break;
        case "groupB":
            displayTeams(teams.filter(team => team.group.includes('B')));
            break;
        case "groupC":
            displayTeams(teams.filter(team => team.group.includes('C')));
            break;
        case "groupD":
            displayTeams(teams.filter(team => team.group.includes('D')));
            break;
        case "groupE":
            displayTeams(teams.filter(team => team.group.includes('E')));
            break;
        case "groupF":
            displayTeams(teams.filter(team => team.group.includes('F')));
            break;
        case "groupG":
            displayTeams(teams.filter(team => team.group.includes('G')));
            break;
        case "groupH":
            displayTeams(teams.filter(team => team.group.includes('H')));
            break;
        case "moreThan11Goals":
            displayTeams(teams.filter(team => team.goals > 10 ));
            break;
    }
}
const reset = () => {
    teamGrps.innerHTML = '';
};
getTeams();
document.querySelector('#filtered').addEventListener("change", () => {filterGroups(teamList)});
