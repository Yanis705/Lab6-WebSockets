const config = require('config');
const base_url = config.get('BaseUrl.url');

primus = Primus.connect(base_url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
});

document.querySelector("#submit").addEventListener("click", function (e) {
    let number = document.querySelector("#number").value;
    let country = document.querySelector("#country").value;

    let msg = document.querySelector(".msg");
    let text = document.querySelector(".text");

    if (number < 0) {
        text.innerHTML = "Number cannot be negative";
        msg.style.display = "inherit";
        msg.style.backgroundColor = "rgba(218, 33, 33, 0.899)"
    } else if (number === "") {
        text.innerHTML = "Number cannot be empty";
        msg.style.display = "inherit";
        msg.style.backgroundColor = "rgba(218, 33, 33, 0.899)"
    } else {
        fetch(base_url + "/api/v1/stats/updatestats", {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "number": number,
                "country": country
            })
        }).then(json => {
            if (json.status = 200) {
                text.innerHTML = "Updated!";
                msg.style.display = "inherit";
                msg.style.backgroundColor = "rgba(19, 193, 126, 0.68)";
                primus.write({
                    "action": "addStats",
                });
            } else {
                text.innerHTML = "Something went wrong";
                msg.style.display = "inherit";
                msg.style.backgroundColor = "rgba(218, 33, 33, 0.899)"
            }
        })
    }
    e.preventDefault();
});