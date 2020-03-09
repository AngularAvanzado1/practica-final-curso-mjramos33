import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule,RegionsComponent } from '@practica-final/ui';
import { HttpClientModule } from '@angular/common/http';


describe('GIVEN: An AppComponent declared in AppModule', () => {
  describe('WHEN: The AppModule is compiled', () => {
      beforeEach(
        async(() => {
            TestBed.configureTestingModule({
              imports: [RouterTestingModule , HttpClientModule],
              declarations: [AppComponent]
            }).compileComponents();
        })
      );//before each

      it('THEN: Should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
      });
    
      it(`THEN: Should have as title 'world-app'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('world-app');
      });
    
      it(`THEN: Should have a counter for navigations`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const app = fixture.debugElement.componentInstance;
        expect(app.navegaciones).toBe(0);
      });

  });//Describe2
});//Describe1
