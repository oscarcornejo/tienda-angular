import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthService} from "../auth/auth.service";

@Injectable()
export class CustomerGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<boolean> | boolean {
    return this.auth.user.pipe(
      map(user => {
      if(user && user.role === 'customer') {
        return true;
      }
      return this.router.navigate(['/shop']);
    })
  )
  }
}
