import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <md-toolbar color="primary">
      NGRX Workshop
    </md-toolbar>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
