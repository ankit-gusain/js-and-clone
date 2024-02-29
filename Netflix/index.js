const apiKey = "6493c92a5edcfb854a625b68632eb3f3";
const apiEndpoint = "https://api.themoviedb.org/3";
const apiPath = {
    fetchAllCat: `${apiEndpoint}/genre/movie/list?api_key=${apiKey}`
}

function main() {
    fetch(apiPath.fetchAllCat)
        .then(response => response.json())
        .then(response => console.table(response.genres))
        .catch(err => console.error(err));
}

window.addEventListener("load", function () {
    main();
});
