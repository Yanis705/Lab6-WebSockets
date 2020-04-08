const base_url = "http://localhost:3000";

document.querySelector("#submit").addEventListener("click", function () {
    let number = document.querySelector("#number").value;
    let country = document.querySelector("#country").value;

    console.log(country);

    console.log(number);
    console.log(country);

    fetch(base_url + "/api/v1/stats/updatestats", {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "number": number,
            "country": country
        })
    })
});
