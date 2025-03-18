let userInput = document.getElementById("searchInput");
let resultCountriesEl = document.getElementById("resultCountries");
let spinnerEl = document.getElementById("spinner");
let options = {
    method: "GET",
}
let url = "https://apis.ccbp.in/countries-data";

function createAndAppend(item) {
    let {
        flag,
        name,
        population
    } = item;
    let resultContainer = document.createElement("div");
    resultContainer.classList.add("my-4", "bg-[#eaf2f9]", "font-[Roboto]", "flex", "items-center", "p-4", "rounded-lg");
    resultCountriesEl.appendChild(resultContainer);

    let imgEl = document.createElement("img");
    imgEl.src = flag;
    imgEl.classList.add("w-[15%]", "mr-3");
    resultContainer.appendChild(imgEl);

    let textEl = document.createElement("div");
    resultContainer.appendChild(textEl);

    let countrynameEl = document.createElement("h1");
    countrynameEl.textContent = name;
    countrynameEl.classList.add("text-[#183b56]", "text-xl", "font-bold");
    textEl.appendChild(countrynameEl);

    let populationEl = document.createElement("p");
    populationEl.textContent = population;
    textEl.appendChild(populationEl);

}

function displayResults(jsonData) {
    for (let each_item of jsonData) {
        if (each_item.name.slice(0, userInput.value.length) === userInput.value) {
            createAndAppend(each_item);
        }
    }
}

spinnerEl.classList.toggle("hidden");

fetch(url, options)
    .then(response => response.json())
    .then(function(jsonData) {
        spinnerEl.classList.toggle("hidden");
        displayResults(jsonData);
    });

userInput.addEventListener("change", function() {
    resultCountriesEl.textContent = "";
    spinnerEl.classList.toggle("hidden");
    fetch(url, options)
        .then(response => response.json())
        .then(function(jsonData) {
            spinnerEl.classList.toggle("hidden");
            displayResults(jsonData);
        });
});