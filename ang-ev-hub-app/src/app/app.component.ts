import { Component } from '@angular/core';
import { IAmTheProblemService } from './i-am-the-problem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-ev-hub-app';
  constructor(private iAmTheProblemService: IAmTheProblemService) {
    this.iAmTheProblemService.doSomething();
  }
}
