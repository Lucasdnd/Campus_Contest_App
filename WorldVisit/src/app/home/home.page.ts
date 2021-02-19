import { Component } from '@angular/core';  
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  countryApiUrl = '';
  countryData = {
    
  }

  constructor(public http: HttpClient) {
    this.readAPI('https://restcountries.eu/rest/v2/all')
    .subscribe((data) => {
      console.log(data);
    });
  }

    readAPI(URL: string) {
      return this.http.get(URL);
    }

}
