import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {
  }

  getRandomBeer(): Observable<Object> {
    return this.http.get("http://localhost:3000");
  }

  getBestBeerOfTheWorld(): string {
    return 'Cuvée des Trolls';
  }
}
