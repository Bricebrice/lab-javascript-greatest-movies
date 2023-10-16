// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const newArray = moviesArray.map((movie) => movie.director);
  // Bonus
  const newArrayRmDup = [];
  newArray.forEach((element) => {
    if (!newArrayRmDup.includes(element)) {
      newArrayRmDup.push(element);
    }
  });
  return newArrayRmDup;
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
  newMoviesArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return newMoviesArray;
}
// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // order by title in same array
  const orderByTitle = orderByYear(moviesArray).sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  // keep only title in new array
  const newMoviesArray = orderByTitle.map((movie) => movie.title);

  // return first 20 results
  return newMoviesArray.slice(0, 20);
}
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const updatedMoviesArray = moviesArray.map((movie) => {
    // console.log("movie.duration is," + movie.duration);
    let parts = movie.duration.split(" ");
    let totalMinutes = 0;
    console.log(parts);
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].includes("h")) {
        console.log("includes h " + parts[i]);
        // totalMinutes += parts[i];
        let hoursConverted = 0;
        hoursConverted += Number(parts[i].slice(0, -1) * 60);
        totalMinutes += hoursConverted;
        console.log("totalMinutesFromHours " + totalMinutes);
      } else if (parts[i].includes("min")) {
        let mins = 0;
        mins += Number(parts[i].slice(0, -3));
        totalMinutes += mins;
        console.log(
          "totalMinutesFromMinutes " + totalMinutes + " from " + mins
        );
      }
    }
    return movie.duration;
  });
}
console.log("output is :" + turnHoursToMinutes(movies));

//     title: 'Jaws',
//     year: 1975,
//     director: 'Steven Spielberg',
//     duration: '2h 4min',
//     genre: ['Adventure', 'Drama', 'Thriller'],
//     score: 8

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
