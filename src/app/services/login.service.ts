import { Service } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

interface LoginPayload {
  email: string;
  password: string;
}

@Service({ autoProvided: false })
export class LoginService {
  loginWithPromise(credentials: LoginPayload): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email && credentials.password) {
          console.log('LoginService (Promise) - Logged Credentials:', credentials);
          resolve({ success: true, message: 'Login successful' });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  }

  loginWithObservable(credentials: LoginPayload): Observable<any> {
    const loginObs = new Observable((observer) => {
      setTimeout(() => {
        if (credentials.email && credentials.password) {
          observer.next(credentials);
          observer.complete();
        } else {
          observer.error(new Error('Invalid credentials'));
        }
      }, 1000);
    });

    return loginObs.pipe(
      map((creds: any) => {
        return {
          ...creds,
          email: creds.email.toUpperCase(),
        };
      }),
      tap((transformedCreds) => {
        console.log(
          'LoginService (Observable) - Logged Credentials (Uppercase):',
          transformedCreds,
        );
      }),
    );
  }
}
