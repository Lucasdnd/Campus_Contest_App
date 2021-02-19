import { Component } from '@angular/core';  
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchName:'';
  countryApiUrl = '';
  countryData = {
    name: '',
    capital:'',
    region:''
  };

  constructor(public http: HttpClient) {
    
  }

    readAPI(URL: string) {
      return this.http.get(URL);
    }

    searchCountry() {
      const search = encodeURIComponent(this.searchName);
      console.log('recherche du pays '+ this.searchName);
      this.countryApiUrl = 'https://restcountries.eu/rest/v2/name/' + search;
      this.readAPI( this.countryApiUrl)
    .subscribe((data) => {
      console.log(data[0]['name']);
      console.log(data[0]['capital']);
      console.log(data[0]['region']);
      this.countryData.name = data[0]['name'];
      this.countryData.capital = data[0]['capital'];
      this.countryData.region = data[0]['region'];
    });
    }
}
