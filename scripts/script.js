const generate = document.querySelector("#generate");
const h3 = document.querySelector("h3");
const h4 = document.querySelector("h4");

const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandella"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        person: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        person: "Steve Jobs"
    }
];


generate.addEventListener("click", function() {
    let num = Math.floor(Math.random() * quotes.length);
    let quote = `${quotes[num].quote} `;
    let author = `- ${quotes[num].person}`;
    h3.innerText = quote;
    h4.innerText = author;
});
