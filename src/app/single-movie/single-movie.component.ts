import { Component, Input } from '@angular/core';
interface Movie {
  Title: string
  Poster: string
  Type: string
  Year: string
  imdbID: string
}
@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent {
  @Input() movie = {} as Movie
}
