import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-choixdate',
  templateUrl: './choixdate.page.html',
  styleUrls: ['./choixdate.page.scss'],
})
export class ChoixdatePage {
  searchName:'';
  countryApiUrl = '';
  countryData = {
    name: '',
    capital:'',
    region:''
  };
  countries: Object;

  constructor(public http: HttpClient) {
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
      this.countries = data;
      this.countryData.name = data[0]['name'];
      this.countryData.capital = data[0]['capital'];
      this.countryData.region = data[0]['region'];
    });
    }
}