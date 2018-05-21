import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable()
export class AppService {

  loading$: Observable<boolean> = of(false);

  constructor() { }

  fireLoader() {
    this.loading$ = of(true);
  }

  stopLoader() {
    this.loading$ = of(false);
  }

}
