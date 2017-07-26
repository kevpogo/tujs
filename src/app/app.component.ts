import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NoConsulting';
  private promise = new Promise<number>((resolve, reject) => {
    resolve(42);
  });
  answer: number;

  constructor() {
    this.getAnswerToLifeTheUniverseAndEverythingPromise()
      .then(answer => {
        this.answer = answer;
      });
  }

  getAnswerToLifeTheUniverseAndEverything() {
    return 42;
  }

  getAnswerToLifeTheUniverseAndEverythingPromise(): Promise<number>{
    return this.promise;
  }
}
