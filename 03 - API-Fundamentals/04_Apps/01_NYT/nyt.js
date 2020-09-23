const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'eiMWyE2j4zzM5cSGkw9Nv3fGN8bZkbLN';
let url;

//Search Form
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//Results Navigation
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//Results Section
const section = document.querySelector('section');

nextBtn.style.display = 'none';
previousBtn.style.display = 'none';

let pageNumber = 0;
console.log('PageNumber:'. pageNumber);
//let displayNav = false;

        //1                     //2
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage); //3

function fetchResults(e){
    e.preventDefault();
    //Assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log("URL:", url);
    
    if(startDate.value !== ''){
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };

    if(endDate.value !== ''){
        url += '&end_date=' + endDate.value;
    };

    fetch(url)
        .then(function(result){
            return result.json();
        }).then(function(json){
            displayResults(json);
        });
}

function displayResults(json){
    while (section.firstChild){
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;
    
    if(articles.length === 10 && pageNumber === 0){
        nextBtn.style.display = 'block';
        previousBtn.style.display = 'none';
    } else if (articles.length < 10 && pageNumber !== 0){
        nextBtn.style.display = 'none';
        previousBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        previousBtn.style.display = 'block';
        //nav.style.display = 'block'; //? Why doesn't this work?
    }

    if(articles.length === 0){
        console.log('No results');
    } else {
        for(let i = 0; i < articles.length; i++){
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i];

            link.href = current.web_url;
            link.textContent = current.headline.main;

            // para.textContent = 'Keywords: ';

            // for(let j = 0; j < current.keywords.length; j++){
            //     let span = document.createElement('span');
            //     span.textContent += current.keywords[j].value + ' ';
            //     para.appendChild(span);
            // }

            if(current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }

            clearfix.setAttribute('class', 'clearfix');

            article.style.margin = '25px';
            article.style.width = '200px';
            article.style.height = '300px';
            article.style.borderRadius = '5px';
            article.style.boxShadow = '2px 2px 8px black';

            link.style.textDecoration = 'none';
            link.style.color = 'black';

            img.style.width = '75%';
            img.style.height = 'auto';

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
};

function nextPage(e){
    pageNumber++;
    fetchResults(e);
    console.log('Page number:', pageNumber);
};

function previousPage(e){
    if(pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log("Page:", pageNumber);
};