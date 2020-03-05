/*SERVICIO DE DATOS */
//ng g service regions --project=common-data --no-flat

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { RegionsAPIResp,CountriesAPIResp,CountryAPIResp} from '@practica-final/domain';



@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  
  private urlRegions='http://api.worldbank.org/v2/region/?format=json'
  private urlOneRegion:string;
  private urlCountry:string;

  constructor(private httpClient:HttpClient) { 
  }
  
  /*MEtodo que realiza la llamada HTTP y devuelve un objeto RegionsAPIResp*/
  public getRegionsFromApi():Observable<RegionsAPIResp> {
      console.log("[RegionsService]- getRegionsFromApi");
      return this.httpClient.get<RegionsAPIResp>(this.urlRegions);
  }//getRegionsFromApi
  
  /*metodo que realiza la llamada HTTP y devuelve un objeto CountriesAPIResp*/
  public getOneRegionFromApi(code:string):Observable<CountriesAPIResp> {
    console.log("[RegionsService]- getOneRegionFromApi -CODE: "+code);
    this.urlOneRegion="http://api.worldbank.org/v2/region/"+code+"/country?per_page=1000&format=json"
    return this.httpClient.get<CountriesAPIResp>(this.urlOneRegion);
  }//getOneRegionFromApi

    /*metodo que realiza la llamada HTTP y devuelve un objeto CountriesAPIResp*/
    public getCountryFromApi(id:string):Observable<CountryAPIResp> {
      console.log("[RegionsService]- getCountryFromApi - ID: "+id);
      this.urlCountry="http://api.worldbank.org/V2/country/"+id+"?format=json"
      return this.httpClient.get<CountryAPIResp>(this.urlCountry);
    }//getOneRegionFromApi
  

}
