import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http"

@Component({
  selector: 'app-code-lab',
  templateUrl: './code-lab.component.html',
  styleUrls: ['./code-lab.component.css']
})
export class CodeLabComponent implements OnInit {

  codeLabResults: Array<object>;

  constructor(private http: Http) {
    this.http.get("/assets/angular-portfolio/data-sources/code-lab.json")
    .subscribe(res => {
      this.codeLabResults = res.json()
    })
  }

  ngOnInit() {
  }

}
