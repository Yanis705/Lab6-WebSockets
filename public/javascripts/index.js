let parent = document.querySelector("#cases");
const base_url = config.get('BaseUrl.url');

primus = Primus.connect(base_url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
});

primus.on("data", (json) => {
    if(json.action === "addStats"){
        parent.innerHTML = "";
        showCases();
        console.log("reloaded");
    }
});

function showCases() {
    fetch('http://localhost:3000/api/v1/stats', {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => {
        return response.json();
    }).then(json => {
        json.data.forEach(stat => {
            let child = document.createElement('div');
            child.setAttribute("class", "case")
            let country = document.createElement('h1');
            let cases = document.createElement('p');
            country.innerHTML = stat.country;
            cases.innerHTML = stat.number;
            child.append(country);
            child.append(cases);
            parent.append(child);
        });
    })
}

window.onload = showCases();