import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  @Output() inputData = "christmas"
  @Output() handleData = new EventEmitter<string>() //creates new event, to be used like normal in template
  getData(event: KeyboardEvent) {
    if(event.key === "Enter") {
      
      let target = event.target as HTMLInputElement
      console.log(target.value.toLowerCase());
      if (target.value.toLowerCase().includes("santa") || target.value.toLowerCase().includes("christmas") || target.value.toLowerCase().includes("noelle") || target.value.toLowerCase().includes("natale")) {
        this.inputData = target.value.toLowerCase()
        this.handleData.emit(this.inputData)
      } else alert("This is not a christmas word!")
    }
  }
}
