import { TestBed,async } from '@angular/core/testing';
import { RegionsService } from './regions.service';
import { HttpClientTestingModule , HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { RegionsAPIResp, Region } from '@practica-final/domain';

describe('GIVEN: a RegionsService', () => {
  describe('WHEN: DataModule is compiled', () => {
    describe('WHEN: getRegionsFromApi id called()', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports:[HttpClientTestingModule]
      });
    });//beforeEach
  
    it('THEN: should be created', () => {
      const service:RegionsService=TestBed.inject(RegionsService);
      expect(service).toBeTruthy();
    });

    it('THEN: it should return an Observable when call getRegionsFromApi()', () => {
      const service:RegionsService=TestBed.inject(RegionsService);
      const regions$:Observable<RegionsAPIResp> =service.getRegionsFromApi();
      expect(regions$).toBeInstanceOf(Observable);
    });

    //probamos que el servicio devuelve la respuesta que recibe de la API (sea cual sea).
    it('THEN: it should return an array of regions when call getRegionsFromApi()', 
      async(()=>{
        const service:RegionsService=TestBed.inject(RegionsService);
        service.getRegionsFromApi().subscribe( result =>{
            expect(result).toEqual({total:'48'}) //total de regiones
          }
        );//subscribe

        //MOCKEAMOS LA RESPUESTA DEL SERVICIO: 
        const httpMock =TestBed.get(HttpTestingController);
        const req = httpMock.expectOne('http://api.worldbank.org/v2/region/?format=json');
        req.flush({total:'48'}); //total de regiones
        httpMock.verify();

      })//Async
    );//it
    

    });//Describe
  });//Describe
});//Describe
