import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDigimonComponent } from './get-digimon/get-digimon.component';
import { ListDigimonComponent } from './list-digimon/list-digimon.component';
import { HomectnComponent } from './homectn/homectn.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomectnComponent, GetDigimonComponent, ListDigimonComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomectnComponent, GetDigimonComponent, ListDigimonComponent],
})
export class PagesModule {}
