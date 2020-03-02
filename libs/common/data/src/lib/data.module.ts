/*LIBRERIA ANGULAR CON SERVICIOS DE DATOS */
//ng g @nrwl/angular:library data --directory=common --prefix=ab-data --simpleModuleName

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionsService } from './regions/regions.service';

@NgModule({
  imports: [CommonModule],
})
export class DataModule {}
