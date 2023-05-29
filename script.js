// const api_quotes="https://api.quotable.io/quotes/random"
// async function getquotes(URL){
//     const res = await fetch(`${URL}`);
//     const data = await res.json();
//     console.log(data);
// }
// getquotes(api_quotes);

// const api_quotes="https://api.quotable.io/random"
// async function getquotes(URL){
//     const res = await fetch(`${URL}`);
//     const data = await res.json();
//     console.log(data);
//     quoteContent.innerHTML=data.content;
//     quoteAuthor.innerHTML=data.author;
// // }
// }
// getquotes(api_quotes);
const nameOfPerson=window.prompt("please enter your name");
window.alert("welcome "+ nameOfPerson);
const nameA=document.getElementById('name');
nameA.innerHTML=nameOfPerson;

const quoteContent=document.getElementById('text');
const quoteAuthor=document.getElementById('quote-author');
const newQuote=document.getElementById('new-quote');
const twitterPost=document.getElementById('twitter');


const api_quotes="https://api.quotable.io/random"
async function getquotes(URL){
    const res = await fetch(URL);
    var data = await res.json();
    console.log(data);
    quoteContent.innerHTML=data.content;
    quoteAuthor.innerHTML=data.author;
}
getquotes(api_quotes);

newQuote.addEventListener('click', function(){
    getquotes(api_quotes); 
})

function tweet(){
    window.open(  "https://twitter.com/intent/tweet?text="+quoteContent.innerHTML+ "   ---by   "+quoteAuthor.innerHTML,"Tweet Window","width=600,height=300")
    
}
twitterPost.addEventListener('click', function(){
    tweet();
})