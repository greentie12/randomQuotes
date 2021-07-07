/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/* initialize quotes array with 5 quote objects */
let quotes = [
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon",
    citation: "Beautiful Boy",
    year: 1980,
    tags: "Music",
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    source: "Mother Teresa",
    citation: "",
    year: "",
    tags: "Spiritual",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    source: "Mahatma Gandhi",
    citation: "",
    year: "",
    tags: "Spiritual",
  },
  {
    quote: "Get busy living or get busy dying.",
    source: "Stephen King",
    citation: "Shawshank Redemption",
    year: 1994,
    tags: "Movie",
  },
  {
    quote:
      "Life is like a box of chocolates. You never know what you’re going to get.",
    source: "Forrest Gump ",
    citation: "Forrest Gump ",
    year: 1994,
    tags: "Movie",
  },
];

// getRandomQuote function

function getRandomQuote() {
  // create a random number bewteen 0 - array.length-1
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}

/* 
randomRgbVal returns random numbers for r,g & b values 
*/
function randomRgbVal() {
  let rValue = Math.floor(Math.random() * 256);
  let gValue = Math.floor(Math.random() * 256);
  let bValue = Math.floor(Math.random() * 256);
  return `rgb(${rValue}, ${gValue}, ${bValue})`;
}

/* 
changeColor styles backgroundColor 
to the values returned by randomRgbVal  
*/
function changeColor() {
  body = document.body;
  body.style.backgroundColor = randomRgbVal();
}

// printQuote function
function printQuote() {
  let quoteObject = getRandomQuote(quotes);
  let quoteString = `
    <p class="quote"> ${quoteObject.quote} </p>
    <p class="source"> ${quoteObject.source} 
  `;
  let tag = `<h3>${quoteObject.tags}</h3>`;
  //checks to see if object.citation has a value not false
  if (quoteObject.citation) {
    quoteString += `
      <span class="citation"> ${quoteObject.citation} </span>
      <span class="year"> ${quoteObject.year} </span>
      </p> 
      ${tag}
    `;
  } else {
    quoteString += `
      </p>
      ${tag}
    `;
  }

  document.getElementById("quote-box").innerHTML = quoteString;
  changeColor();
}

printQuote();

function timer() {
  window.setInterval(printQuote, 12000);
}
timer();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
