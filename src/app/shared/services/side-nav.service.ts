import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private sideNavToggle = new Subject();
  sideNavToggle$ = this.sideNavToggle.asObservable();

  constructor() {
    console.log('epale');
  }

  toggle(): void {
    this.sideNavToggle.next(null);
  }
}
