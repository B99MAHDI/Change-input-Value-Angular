import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Change Input Value Angular';

  value = 'Initial Value';

  onKey(event: any) {
    this.value = event.target.value;
    console.log(this.value);
  }
}
