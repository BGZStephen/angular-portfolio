import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  showMenu: boolean = false;

  menuToggle(resize?) {
    if(resize && screen.width > 768) {
      this.showMenu = true;
      return {"visibility": "visible", "opacity": "1"}
    } else if (resize && screen.width < 768) {
      this.showMenu = false;
      return {"visibility": "hidden", "opacity": "0"}
    } else if (screen.width < 768 && this.showMenu == false) {
      return {"visibility": "hidden", "opacity": "0"}
    } else {
      return {"visibility": "visible", "opacity": "1"}
    }
  }

  ngOnInit() {
  }

}
