import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule} from '@angular/common/http';
import {PersonajesService} from './personajes.service';
import { PersonajesDeadComponent } from './components/personajes-dead/personajes-dead.component';
import { PersonajesAliveComponent } from './components/personajes-alive/personajes-alive.component';
import { PersonajesUnknownComponent } from './components/personajes-unknown/personajes-unknown.component'


@NgModule({
  declarations: [
    AppComponent,
    PersonajesDeadComponent,
    PersonajesAliveComponent,
    PersonajesUnknownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule

  ],
  providers: [PersonajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
