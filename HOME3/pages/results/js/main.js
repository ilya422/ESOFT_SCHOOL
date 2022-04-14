const api_results = new XMLHttpRequest();
api_results.open("GET", "/api/results", true);
api_results.send()

api_results.onreadystatechange = function () {
    if (api_results.readyState != 4) {
        return
    }

    table = document.querySelector(".table_result");
    json_data = JSON.parse(api_results.responseText)
    for (var i in json_data) {
        var v = json_data[i];
        table.innerHTML += `<tr><td>${v.id}</td> <td>${v.winner}</td> <td>${v.loser}</td></tr>`
    }
}

function clean() {
    api_results.open("DELETE", "/api/results", true);
    api_results.send()
    location.reload();
}
