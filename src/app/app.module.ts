import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GlobServiceService } from './glob-service.service';

import { Routes, RouterModule } from '@angular/router';
import { HasilComponent } from './hasil/hasil.component';

const ROUTES: Routes=[
  {path:'', component: HasilComponent}
]

@NgModule({
  imports:      [ 
    BrowserModule
  , FormsModule
  , RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, HelloComponent, HasilComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobServiceService]
})
export class AppModule { }

