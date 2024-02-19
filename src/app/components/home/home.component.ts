import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  startDate: any;
  endDate: any;

  films: any = [];

  constructor(private restService: RestService) {
  }

  ngOnInit(): void {
    this.getDataFromService();
  }

  getDataFromService(): void {
    this.restService.getFilms(this.dateFormatter()).subscribe(
      (data) => {
        this.films = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  clearDates() {
    this.startDate = null;
    this.endDate = null;
    this.getDataFromService();
  }

  dateFormatter() {
    if(!this.endDate) {
      this.endDate = new Date();
    }

    return {
      "startDate": new DatePipe('en-US').transform(this.startDate, 'dd/MM/yyyy'),
      "endDate": new DatePipe('en-US').transform(this.endDate, 'dd/MM/yyyy')
    }
  }

}
