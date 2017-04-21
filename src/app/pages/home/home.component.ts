import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  workSameplsResults: Array<object>

  constructor(private http: Http) {
    this.http.get("/assets/angular-portfolio/data-sources/work-samples.json")
    .subscribe(res => {
      this.workSameplsResults = res.json()
    })
  }

  ngOnInit() {
  }

}
