// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const newArray = moviesArray.map((movie) => movie.director);
  return newArray;
}
// console.log(getAllDirectors(movies)); // :(

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaMovies = moviesArray.filter(
    (movie) =>
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
  );
  return dramaMovies.length;
}

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  // Sum of movies' scores if score is not null nor undefined
  const scoresSum = moviesArray.reduce((accumulator, movie) => {
    if (movie.score !== null && movie.score !== undefined) {
      return accumulator + movie.score;
    } else {
      return accumulator;
    }
  }, 0);

  // Calculate average
  return Math.round((scoresSum / moviesArray.length) * 100) / 100;
}

//console.log(scoresAverage(movies)); // => 8,31

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newMoviesArray = moviesArray.map((movie) => movie);
  // console.log(newMoviesArray);
  return newMoviesArray.sort((a, b) => a.year - b.year);
}
console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
