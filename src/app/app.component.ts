import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'domain-user';

  constructor(
  ) { }

  ngOnInit(): void {

  }

  isDomainSearch(data) {
    console.log("AppComponent->", data);
  }


}
