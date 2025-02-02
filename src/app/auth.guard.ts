import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login/login.service';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    debugger
    if (this.loginService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirect if not authenticated
      return false;
    }
  }
}