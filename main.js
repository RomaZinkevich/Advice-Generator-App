window.onload = function(){
    const header = document.querySelector("h1");
    const text = document.querySelector("p")
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => data.slip)
    .then(answer => {
        header.innerHTML=`ADVICE #${answer.id}`;
        text.innerHTML=`"${answer.advice}"`;
    })
}