import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDigimonComponent } from './pages/get-digimon/get-digimon.component';
import { HomectnComponent } from './pages/homectn/homectn.component';
import { ListDigimonComponent } from './pages/list-digimon/list-digimon.component';

const routes: Routes = [
  { path: 'home', component: HomectnComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: 'getdigimon', component: GetDigimonComponent },
  { path: 'listdigimon', component: ListDigimonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
