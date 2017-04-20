import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http"

@Component({
  selector: 'app-work-samples',
  templateUrl: './work-samples.component.html',
  styleUrls: ['./work-samples.component.css']
})
export class WorkSamplesComponent implements OnInit {

  workSameplsResults: Array<object>;

  constructor(private http: Http) {
    this.http.get("/assets/angular-portfolio/data-sources/work-samples.json")
    .subscribe(res => {
      this.workSameplsResults = res.json()
    })
  }

  ngOnInit() {
  }

}
