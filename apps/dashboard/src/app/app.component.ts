import { Component } from '@angular/core';

@Component({
  selector: 'playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'I' + 'D' + 'E' + 'A' + '-' + 'A' + 'P' + 'P';
  links = [
    { path: '/', icon: 'home', title: 'Login' },
    { path: 'ideas', icon: 'view_list', title: 'Idea-List' },
  ];
}
