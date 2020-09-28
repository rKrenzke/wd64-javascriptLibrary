const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'eiMWyE2j4zzM5cSGkw9Nv3fGN8bZkbLN';
let url;

//Search Form
const searchTerm = document.querySelector('.search');           //*** 
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//Results Navigation                                            // Using the querySelector() method to target specific HTML elements and assigning them to variable
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//Results Section
const section = document.querySelector('section');              //*** 

nextBtn.style.display = 'none';     //sets default status of buttons to invisible, status is modified within the displayResults() function
previousBtn.style.display = 'none'; //sets default status of buttons to invisible, status is modified within the displayResults() function

let pageNumber = 0;     //set initial value of pageNumber to 0, will be refactored when using nextPage() and previousPage() functions
//console.log('PageNumber:'. pageNumber);
//let displayNav = false;

                            
searchForm.addEventListener('submit', fetchResults);    //function listening for a 'submit' event for the 'form' HTML element, then will invoke the fetchResults() function
nextBtn.addEventListener('click', nextPage);            //function listening for a 'click' event for the '.next' HTML class element, then will invoke the nextPage() function
previousBtn.addEventListener('click', previousPage);    //function listening for a 'click' event for the '.prev' HTML class element, then will invoke the previousPage() function

function fetchResults(e){   //e is an 'event object' similar to a variable that allows you to interact with the object, and contains a bunch of properties(variables) and methods(functions)
    e.preventDefault();     //We add the preventDefault() method to make sure a request isn't actually sent because the default nature of a form element is to submit data (i.e. send a POST request), but we want to get data (i.e. send a GET request). We are using the form to gather the data for that request
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;   //Assemble the full URL, which will be used in the IF statement below to set the boundaries for dates the API will pull articles from
    //console.log("URL:", url);
    
    if(startDate.value !== ''){
        url += '&begin_date=' + startDate.value; //concatenates the string with user input for beginning date and adds to the full URL
    };

    if(endDate.value !== ''){
        url += '&end_date=' + endDate.value;  //concatenates the string with the user input for end date and adds to the full URL
    };

    fetch(url)  //We use the fetch() method and pass in the url variable (which by this point includes the following data: baseURL, API key, pageNumber, searchTerm string, beginning date, and end date)
        .then(function(result){     //The 'result' variable represents that data returned from our fetch(url) function
            return result.json();   //We take the returned data and invoke the json() method to transform the data into a JSON object, therefore allowing us to interact with it and display it's values.
        }).then(function(json){     
            displayResults(json);   //We then take the JSON-ified object and pass it into our displayResults() function
        });
}

function displayResults(json){
    while (section.firstChild){     //This while loop checks to see if there is content already on the page (in the form of newly created child elements that occurs after search results are returned). If there are child elements, those are cleared so the next page of content appears at the top. Otherwise, more articles would simply be added to the bottom in an ever-growing list. 
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;
    
    if(articles.length === 10 && pageNumber === 0){                 //*
        nextBtn.style.display = 'block';                            
        previousBtn.style.display = 'none';                         
    } else if (articles.length < 10 && pageNumber !== 0){           
        nextBtn.style.display = 'none';                             // Logic for determining when 'Next' and 'Previous' buttons display
        previousBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        previousBtn.style.display = 'block';
        //nav.style.display = 'block';
    }                                                               //*

    if(articles.length === 0){
        console.log('No results');
    } else {
        for(let i = 0; i < articles.length; i++){       //Using a FOR loop, we iterate through the list of articles and create HTML elements(article, h2, a, img, p, and div) for each one, and then assign each one of those elements to a variable
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');  //*A clearfix is a way for an element to clear its child elements automatically without any additional markup

            let current = articles[i];  //This variable is being assigned the specific, individual article (and therefore access to all its properties) that exists for that particular iteration of the FOR loop

            link.href = current.web_url; //linking the newly created 'a' tag above to this specific article's url
            link.textContent = current.headline.main; //pulling the main headline of each article so it will appear within the 'a' (which is nested in our 'h2' tag)

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

            article.appendChild(heading); //The newly created 'h2' tag is nested in the new 'article' HTML element
            heading.appendChild(link);  //The newly created 'a' tag is nested inside the new 'h2' tag
            article.appendChild(img);   //The newly created 'img' tag (along with the image source and alternate name text from above) is nested inside the new 'article' HTML element
            article.appendChild(para);  //The newly created 'p' tag is nested inside the new 'article' HTML element
            article.appendChild(clearfix);
            section.appendChild(article);  //The newly created 'article' HTML element (and all of the appended elements above) is nested inside the EXISTING 'section' HTML element
        }
    }
};

function nextPage(e){
    pageNumber++;
    fetchResults(e);
    //console.log('Page number:', pageNumber);
};

function previousPage(e){
    if(pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    //console.log("Page:", pageNumber);
};