import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   prayerTimes:any = []
   today: number = Date.now();
    i = 0
  constructor() {
      setInterval(() => {this.today = Date.now()
        this.prayerTimes.forEach((element:any,index:number) => {
          if(index == this.i){
            element.isUpcoming = true
          }else{
            element.isUpcoming = false
          }
        });
      this.i = this.i  + 1;
      if(this.i == 5)
            this.i=0;
      }, 1000);
  }
  ngOnInit(): void {
    this.prayerTimes = [
      {
        prayerTimeName:"Fajr",
        prayerTime:"10:25",
        isUpcoming:false,
      },
      {
        prayerTimeName:"Sunrise",
        prayerTime:"10:25",
        isUpcoming:false,
      },
      {
        prayerTimeName:"Dhuhr",
        prayerTime:"10:25",
        isUpcoming:false,
      },
      {
        prayerTimeName:"Asr",
        prayerTime:"10:25",
        isUpcoming:false,
      },
      {
        prayerTimeName:"Maghrib",
        prayerTime:"10:25",
        isUpcoming:false,
      },
      {
        prayerTimeName:"Isha",
        prayerTime:"10:25",
        isUpcoming:true,
      }
    ]
  }

}
