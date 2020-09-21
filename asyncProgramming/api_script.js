const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

//eventListener
searchForm.addEventListener('submit', fetchSpace);

//FETCH FUNCTION

function fetchSpace(e) {
    e.preventDefault(); //this method allows us to cancel a default action by the browser.
    // console.log('Clicked!');

    fetch(baseURL) //starts the process of fetching from our resource
        .then(results => {
            return results.json() // this method takes in a response (results), reads to completion and returns the results in a json format
        })
        .then(json => {
            console.log(json)
        })
}