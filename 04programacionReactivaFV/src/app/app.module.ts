import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomectnComponent } from './pages/homectn/homectn.component';
import { MonstersctnComponent } from './shared/components/monstersctn/monstersctn.component';
import { ListmonsterctnComponent } from './shared/components/listmonsterctn/listmonsterctn.component';

@NgModule({
  declarations: [
    AppComponent,
    HomectnComponent,
    MonstersctnComponent,
    ListmonsterctnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
