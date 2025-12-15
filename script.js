let searchInputEl = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");
let heading = document.getElementById("heading");
let book;

function createAndAppend(result) {

    let {
        title,
        imageLink,
        author
    } = result;



    book = document.createElement("div");
    book.classList.add("col-6", "col-md-4", "col-lg-12");

    let image = document.createElement("img");
    image.src = imageLink;
    book.appendChild(image);

    let Author = document.createElement("p");

    Author.textContent = author;
    book.appendChild(Author);

}

function addTosearchResults(searchresults) {

    spinner.classList.add("d-none");

    if (searchresults.length !== 0) {
        heading.textContent = "Popular Books";
        let bookrow = document.createElement("div");
        bookrow.classList.add("row");
        searchResults.appendChild(bookrow);
        for (let result of searchresults) {
            createAndAppend(result);
            bookrow.appendChild(book);
        }
    } else {

        heading.textContent = "No Results are found";


    }

}

function addSearch(event) {
    if (event.key === "Enter") {
        searchResults.textContent = "";
        let searchInputValue = searchInputEl.value;
        let url = "https://apis.ccbp.in/book-store?title=" + searchInputValue;
        let options = {
            method: "GET"
        };
        spinner.classList.remove("d-none");
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                addTosearchResults(search_results);
            });
    }
}

searchInputEl.addEventListener("keydown", addSearch);
