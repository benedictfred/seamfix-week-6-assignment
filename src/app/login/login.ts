import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { form, required, email, minLength, FormField } from '@angular/forms/signals';
import { LoginService } from '../services/login.service';

@Component({
  imports: [RouterLink, FormField],
  providers: [LoginService],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  loginModel = signal({
    email: '',
    password: '',
    rememberMe: false,
  });

  private loginService = inject(LoginService);

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email address is required.' });
    email(schemaPath.email, { message: 'Please enter a valid email address.' });
    required(schemaPath.password, { message: 'Password is required.' });
    minLength(schemaPath.password, 6, { message: 'Password must be at least 6 characters long.' });
  });

  async onSubmit(event: Event) {
    event.preventDefault();
    this.loginForm().markAsTouched();

    if (this.loginForm().valid()) {
      const credentials = this.loginForm().value();

      try {
        // Using Promise
        const result = await this.loginService.loginWithPromise(credentials);
        alert('Login successful. Check console for payload.');

        // Replicating functionality using Observable
        this.loginService.loginWithObservable(credentials).subscribe({
          next: () => {
            console.log('Observable approach successful as well.');
          },
        });
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  }
}
