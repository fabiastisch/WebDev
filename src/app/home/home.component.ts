import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {TimeService} from "../time.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  today: number | undefined;
  showTime: boolean = false;
  private timeServiceSub: Subscription;

  public header: string = 'Hallo';
  countNumber: number = 2;

  constructor(private timeService: TimeService) {
    this.timeServiceSub = this.timeService.subscribe(now => {
      this.today = now;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.timeServiceSub.unsubscribe();
  }


  getArray(countNumber: number) {
    return Array.from({length: countNumber}, (_, i) => i + 1);
  }

  validateNumber(num: number) {
    if (num > 5000){
      this.countNumber = 5000;
    }
  }
}
