
    fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=video%20game", {
    "method": "GET",
    "headers": {
    "accept": "application/json",
    "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
    "x-rapidapi-key": "9ca006c4d4mshb87f46688eb6a2ap1c4345jsnaf587db24ace"
}
}).then(response => {
    return response.json()
}).then(jokes => {
    //console.log(jokes.result)//
    const comedy = jokes.result.map(jokeline => {
    return `
            <p class= "joke">${jokeline.value}</p>
            `
})
    document.querySelector("#cnjokes").insertAdjacentHTML("afterbegin", comedy)
})
