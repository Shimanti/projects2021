const movieList = [
  {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6
  },
  {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0
  },
  {
    title: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 5.4
  },
  {
    title: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 3.7
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 8.3
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 9.0
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    imdbRating: 8.5
  }
];

// Get movie titles
// for each movie take the title and put into another array
const titles = []
for (const movie of movieList) {
  titles.push(movie.title)
}
return titles
// Using map
const titles = movies => movies.map(movie => movie.title)
console.log(titles(MovieList))

// Count movies by Nolan
const nolanCount = 0
for (const movie of movieList) {
  if movie.director === "Christopher Nolan" {
    nolanCount += 1
  }
}
return nolanCount
// Using filter
const nolanMovies = movies => movies.filter(movie => movie.director==="Christopher Nolan")
cosole.log(nolanMovies(movieList).length)

// Get titles of movies with rating greater than 7.5
const bestTitles = []
for (const movie of movieList) {
  if movie.imdbRating >= 7.5 {
    bestTitles.push(movie.title)
  }
return bestTitles
// Use map and filter
const bestTitles2 = movies => movies.filter(movie => movie.imdbRating >= 7.5).map(movie => movie.title)
console.log(bestTitles2(MovieList))

// Calculate average rating of Nolan movieList
// average = sum (NolanMovies.ratings)/NolanMovies.length
const nolanAvg = nolanMovies.reduce((acc, movie)=> acc + movie.imdbRating, 0)/nolanMovies.length
