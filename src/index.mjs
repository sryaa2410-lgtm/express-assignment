import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const mockBooks = [
  { id: 1, title: "The Hobbit", author: "Tolkien", genre: "fantasy", year: 1937 },
  { id: 2, title: "Dune", author: "Herbert", genre: "scifi", year: 1965 },
  { id: 3, title: "Emma", author: "Austen", genre: "romance", year: 1815 },
  { id: 4, title: "Neuromancer", author: "Gibson", genre: "scifi", year: 1984 },
];

// TODO 1: logger middleware (global)
// TODO 2: resolveBookById middleware (reused by routes)
// TODO 3+: routes go below

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

//assignment 1: get request to get records of all books

app.get("/api/books", (request, response)=>{
  response.status(200).send(mockBooks);
})

//query params: get request to get records of books by genre

app.get("/api/books/:genre", (request, response) => {
  const {genre} = request.params;
  const filterBooks = mockBooks.filter((book) => book.genre === genre);
  response.status(200).send(filterBooks);

}
)