import { Injectable } from '@angular/core';
import {Observable, Subscription, timer} from "rxjs";
import {map, shareReplay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private timeProvider: Observable<number>;

  constructor() {
    this.timeProvider = timer(0, 1000).pipe(map(tick => Date.now()), shareReplay(1));
  }

  public subscribe(next?: (value: number) => void, error?: (error: any) => void, complete?: () => void): Subscription{
    return this.timeProvider.subscribe(next, error, complete);
  }
}
