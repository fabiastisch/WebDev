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
  private timeServiceSub: Subscription;

  public header: string = 'Hallo';

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


}
