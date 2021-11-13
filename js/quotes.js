const quotes = [
    {
        author:"월트 디즈니",
        quote:"꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다",
    },
    {
        author:"커트 코베인",
        quote:"비록 해가 진다고 해도, 나에게는 전기불이 있다",
    },
    {
        author:"찰리 채플린",
        quote:"웃음이 없는 하루는 버린 하루다",
    }
]
const quoteDiv = document.querySelector("#quoteDiv");
const quote = quoteDiv.querySelector("#quote");
const author = quoteDiv.querySelector("#author");

const randomNum = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[randomNum];

console.log(todaysQuote);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;