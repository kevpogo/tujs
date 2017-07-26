import { AppComponent } from './app.component';
import {TestBed, async, tick} from "@angular/core/testing";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {AppService} from "./app.service";
import {Observable} from "rxjs";

describe('AppComponent', () => {
  let fixture;
  let app;
  let appService: AppService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        AppService
      ],
      imports: [HttpModule, HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    appService = TestBed.get(AppService);
    spyOn(appService, 'getRandomBeer').and.returnValue(Observable.of({data: 'test'}));
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    expect(app.title).toEqual('NoConsulting');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to NoConsulting!');
  }));

  it("should be equal to 42", async(() => {
    expect(app.getAnswerToLifeTheUniverseAndEverything()).toEqual(42);
  }));

  it("should be equal to 42 - promise", async(() => {
    app.getAnswerToLifeTheUniverseAndEverythingPromise()
      .then(answer => {
        expect(answer).toEqual(42);
      });
  }));

  /** Test of http **/

  it('should return all tasks', () => {
    app.getRandomBeer();
    expect(appService.getRandomBeer).toHaveBeenCalled();
    expect(app.beer).toEqual('test');
    expect(app.recherche).toBeFalsy();
  });
});
