import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { RoutingService } from 'src/app/core/services/routing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;

  constructor(private authService: AuthService, private routingService: RoutingService) {}

  signIn(): void {
    if(this.username === "123" && this.password === "123"){
      this.authService.isAuthenticated = true;
      console.log("i ran");
    }
    else{
      this.authService.isAuthenticated = false;

    }
    
    
    this.routingService.navigateTo('/all');

  }

  check(): void {
    console.log(this.authService.isAuthenticated);
  }
}
