# Book Search Application

A web application that allows users to search for books by title and view the results with images and author names. The application fetches data dynamically from an API and displays it in a user-friendly layout.

---

## **Demo**

- Enter a book title in the search input box.
- Press **Enter** to fetch books matching the search query.
- The search results display:
  - Book image
  - Author name
- If no results are found, a "No Results are found" message is displayed.

---

## **Features**

- Dynamic book search using API calls.
- Displays book image and author for each result.
- Loading spinner while fetching data.
- Handles "no results" scenario gracefully.
- Responsive layout with Bootstrap grid classes (`col-6`, `col-md-4`, `col-lg-12`).

---

## **Technologies Used**

- HTML
- CSS
- JavaScript (Vanilla JS)
- [CCBP Book Store API](https://apis.ccbp.in/book-store)

---

## **How to Use**

1. Open `index.html` in your browser.
2. Type a book title in the search box.
3. Press **Enter** to search.
4. View the search results or a "No Results are found" message if there are no matches.

---

## **Code Highlights**

- Fetching data using `fetch` API.
- Dynamically creating and appending DOM elements for each search result.
- Spinner toggle for better user experience during API calls.
- Handles multiple screen sizes using Bootstrap responsive classes.

---

## **Future Improvements**

- Add pagination for large search results.
- Include additional book details (e.g., rating, description, publisher).
- Add a “View Details” button to open book details page.
- Implement a debounce feature to reduce API calls while typing.
- Improve UI with card styling and animations.

---

## **Author**

Your Name
