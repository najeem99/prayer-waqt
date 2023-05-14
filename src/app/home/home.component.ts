import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   today: number = Date.now();

  constructor() {
      setInterval(() => {this.today = Date.now()}, 1);
  }
  ngOnInit(): void {
  }

}
