import {AppService} from "./app.service";
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {TestBed, inject} from "@angular/core/testing";
import {HttpModule} from "@angular/http";
import {Observable} from "rxjs";

describe('AppService', () => {
  let appService: AppService;
  let http: HttpClient;

  const mock = {
    data: 'test'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        AppService,
        HttpClient
      ],
      imports: [HttpModule, HttpClientModule]
    }).compileComponents();
    http = TestBed.get(HttpClient);
    spyOn(http, 'get').and.returnValue(Observable.of({data: 'test'}));
  });

  beforeEach(inject([AppService], (service: AppService) => {
    appService= service;
  }));

  it('should return the best beer of the world', () => {
    const bestBeer: string = appService.getBestBeerOfTheWorld();
    expect(bestBeer).toEqual('Cuvée des Trolls');
  });

  it('should return beer', () => {
    appService.getRandomBeer().subscribe( data => {
      expect(data).toEqual(mock);
    });
  });
});
