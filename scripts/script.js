const generate = document.querySelector("#generate");
const h3 = document.querySelector("h3");
const h4 = document.querySelector("h4");
let quotes;

// API call
fetch("https://type.fit/api/quotes").then(function(response) {
    return response.json();
}) . then(function(data) {
    quotes = data;
});


generate.addEventListener("click", function() {
    let num = Math.floor(Math.random() * quotes.length);
    let quote = `${quotes[num].text} `;
    let author = `- ${quotes[num].author}`;
    h3.innerText = quote;
    h4.innerText = author;
});
