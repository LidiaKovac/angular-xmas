import { Component, Output, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
interface Movie {
  Title: string
  Poster: string
  Type: string
  Year: string
  imdbID: string
}

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss']
})

export class MovieTableComponent {
  @Input() query: string = ""
  @Output() movies: Array<Array<Movie>> = []
  page = 1
  async ngOnInit() {
    let tempMovies = []
    let res = await fetch(`http://www.omdbapi.com/?s=${this.query}&apikey=${environment.apikey}&page=1`)
    const { Search } = await res.json()
    tempMovies = Search

    let res2 = await fetch(`http://www.omdbapi.com/?s=${this.query}&apikey=${environment.apikey}&page=2`)
    const { Search: Search2 } = await res2.json()
    for (const movie of Search2) {


      let allIds = tempMovies.map((movie: Movie) => movie.imdbID)
      console.log(allIds);

      if (allIds.includes(movie.imdbID)) {
        console.log(movie, "already in state")
      } else tempMovies.push(movie)
    }
    console.log(tempMovies);
    let res3 = await fetch(`http://www.omdbapi.com/?s=${this.query}&apikey=${environment.apikey}&page=3`)
    const { Search: Search3 } = await res3.json()
    for (const movie of Search3) {
      let allIds = tempMovies.map((movie: Movie) => movie.imdbID)
      if (allIds.includes(movie.imdbID)) {
        console.log(movie, "already in state")
      } else tempMovies.push(movie)
    }
    console.log(tempMovies);

    this.makePyramidScheme(tempMovies)
  }
  async ngOnChanges() {
    let tempMovies = []
    let res = await fetch(`http://www.omdbapi.com/?s=${this.query}&apikey=${environment.apikey}&page=1`)
    const { Search } = await res.json()
    tempMovies = Search

    let res2 = await fetch(`http://www.omdbapi.com/?s=${this.query}&apikey=${environment.apikey}&page=2`)
    const { Search: Search2 } = await res2.json()
    for (const movie of Search2) {


      let allIds = tempMovies.map((movie: Movie) => movie.imdbID)
      console.log(allIds);

      if (allIds.includes(movie.imdbID)) {
        console.log(movie, "already in state")
      } else tempMovies.push(movie)
    }
    console.log(tempMovies);
    let res3 = await fetch(`http://www.omdbapi.com/?s=${this.query}&apikey=${environment.apikey}&page=3`)
    const { Search: Search3 } = await res3.json()
    for (const movie of Search3) {
      let allIds = tempMovies.map((movie: Movie) => movie.imdbID)
      if (allIds.includes(movie.imdbID)) {
        console.log(movie, "already in state")
      } else tempMovies.push(movie)
    }
    console.log(tempMovies);

    this.makePyramidScheme(tempMovies)
  }
  makePyramidScheme(movies: Array<Movie>) {
    console.log(movies)
    let pyramid = []
    let amountOfRows = 6
    let amountOfMovies = 24
    let slicedMovies = movies.slice(0, amountOfMovies)
    console.log(slicedMovies);
    slicedMovies.length

    let q = 1 //quantita' di elementi nella riga
    let start = 0
    let end = start + q
    for (let i = 0; i < amountOfRows; i++) {
      pyramid.push(slicedMovies.slice(start, end))
      console.log("slice", start, end);
      q++
      start = end
      end = start + q
    }
    this.movies = pyramid
  }
}
