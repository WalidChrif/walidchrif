import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RedirectGuard implements CanActivate {

  constructor(private router: Router) {}


    //both in 2018
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//       window.location.href = route.data['externalUrl'];
//       return true;
//   }

    canActivate({ data }: ActivatedRouteSnapshot): boolean {
      window.open(data['externalUrl'], '_blank');
      return false;
    }
  
}

// cli generated
// import { CanActivateFn } from '@angular/router';
// export const RedirectGuard: CanActivateFn = (route, state) => {
//   return true;
// };