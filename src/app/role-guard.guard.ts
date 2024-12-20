import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationServiceService } from './authentification-service.service';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthentificationServiceService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean
    | UrlTree> | boolean | UrlTree {
    if (this.authService.getRole('ROLE_ADMIN')) {
      return true
    }
    this.router.navigate(['/login']);
    return false;
  }
}