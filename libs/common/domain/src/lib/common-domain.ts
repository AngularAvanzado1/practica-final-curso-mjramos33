/*BIBLIOTECA CON LÓGICA DE DOMINIO*/
//ng g @nrwl/angular:library domain --directory=common

export interface IsoObject{
    id:string;
    iso2Code:string;
}

export interface IsoObjectExtended{  
    id:string;
    iso2code:string;
    value:string;
}


export interface Region extends IsoObject{
    id:string;
    code:string;
    iso2code:string;
    name:string;
}

export interface Country extends IsoObject{
    id:string,
    iso2Code:string,
    name:string,
    region:IsoObjectExtended,
    adminregion:IsoObjectExtended,
    incomeLevel:IsoObjectExtended,
    lendingType:IsoObjectExtended,
    capitalCity:string,
    longitude:string,
    latitude:string
}

/* cabecera del json que devuelven la API del Banco Mundial*/
export interface HeaderResponse {
    page:string,
    pages:string,
    per_page:string,
    total:string
}
/*respuesta de la llamada REST para consultar todas las regiones*/
export interface RegionsAPIResp{
    header: HeaderResponse, 
    regions: Region[] 
}

/*respuesta de la llamada REST para consultar todos los paises de una region*/
export interface CountriesAPIResp{
    header: HeaderResponse, 
    countries: Country[] 
}

/*respuesta de la llamada REST para consultar 1 pais*/
export interface CountryAPIResp{
    header: HeaderResponse, 
    country: Country
}


