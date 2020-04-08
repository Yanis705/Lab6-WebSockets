let parent = document.querySelector("#cases");

function showCases(){
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