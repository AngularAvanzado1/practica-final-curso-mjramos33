import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule, RegionsComponent } from '@practica-final/ui';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RegionsService } from '../../../../data/src/lib/regions/regions.service';
import { OnInit } from '@angular/core';


describe('GIVEN: A RegionsComponent declared in UiModule', () => {
  describe('WHEN: The UiModule is compiled', () => {
    
    let component: RegionsComponent;
    let fixture: ComponentFixture<RegionsComponent>;
  
    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
              imports: [RouterTestingModule ,UiModule, HttpClientModule ],
              declarations: []
            }).compileComponents();

        })
    );
    
    it('THEN: Should create the component', () => {
      fixture = TestBed.createComponent(RegionsComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('THEN: Should render an author', () => {
      fixture = TestBed.createComponent(RegionsComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h3').textContent).toContain(
        'Práctica Final de Mónica Jiménez'
      );
    });
    
    it('THEN: Should render a table with four columns', () => {
        fixture = TestBed.createComponent(RegionsComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;          
        expect(compiled.querySelector('table').textContent).toContain('ID');
        expect(compiled.querySelector('table').textContent).toContain('ISO TO CODE');
        expect(compiled.querySelector('table').textContent).toContain('CODE');
        expect(compiled.querySelector('table').textContent).toContain('NAME');
      }
    );
    
  /*
    //He preguntado esto por el foro 
    it('THEN: Should render a table with seven regions', () => {
          fixture = TestBed.createComponent(RegionsComponent);
          fixture.detectChanges();
          fixture.componentInstance.ngOnInit();
          const compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('table').textContent).toContain('Europe & Central Asia');
          expect(compiled.querySelector('table').textContent).toContain('Latin America & Caribbean');
          expect(compiled.querySelector('table').textContent).toContain('Middle East & North Africa');
          expect(compiled.querySelector('table').textContent).toContain('North America');
          expect(compiled.querySelector('table').textContent).toContain('South Asia');
          expect(compiled.querySelector('table').textContent).toContain('Sub-Saharan Africa');
        }
    );
  */
  });//Describe2
});//Describe1

     