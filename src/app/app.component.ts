import { Component } from '@angular/core';
import {AppService} from "./app.service";

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
  beer: any;
  recherche= false;

  constructor(private appService: AppService) {
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

  getRandomBeer() {
    this.recherche = true;
    this.beer = undefined;
    this.appService.getRandomBeer()
      .subscribe(result => {
        console.log(result['data']);
        this.beer = result['data'];
        this.recherche = false;
      })
  }
}
