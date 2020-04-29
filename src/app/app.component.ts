import { Component } from '@angular/core';
import { GlobServiceService } from './glob-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';
  constructor(private router: Router){}
  
  kirim(){
    this.router.navigate(['hasil']);
  }
}


