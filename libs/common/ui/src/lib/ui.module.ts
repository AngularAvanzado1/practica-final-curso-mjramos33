
/* libreria con componentes de interfaz */
/*ng g @nrwl/angular:library ui --directory=common --prefix=ui --simpleModuleName*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionsComponent } from './regions/regions.component';
import { RegionItemComponent } from './region-item/region-item.component';
import { CountryItemComponent } from './country-item/country-item.component';


@NgModule({
  imports: [CommonModule],
  declarations: [RegionsComponent, RegionItemComponent, CountryItemComponent],
  exports: [RegionsComponent, RegionItemComponent, CountryItemComponent]
})
export class UiModule {}
