import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-xmas';
  query= "christmas"

  setQuery(data:string) {
    this.query = data
  }
}
