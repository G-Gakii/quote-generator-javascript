
function getQuote(){
    fetch(' https://api.quotable.io/random')
    .then(response =>response.json())
    .then(data=>{
        const quote =data.content;
        document.getElementById("quote").textContent=quote
    })
    .catch(error =>{
        console.error('error fetching quote',error);

    })
}
document.getElementById("new-quote").addEventListener("click",getQuote)
getQuote()