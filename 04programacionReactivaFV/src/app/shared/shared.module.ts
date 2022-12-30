import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigimonComponent } from './components/digimon/digimon.component';
import { DigimonListComponent } from './components/digimon-list/digimon-list.component';

@NgModule({
  declarations: [DigimonComponent, DigimonListComponent],
  imports: [CommonModule],
  exports: [DigimonComponent, DigimonListComponent],
})
export class SharedModule {}
