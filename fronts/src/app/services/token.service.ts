import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class TokenService {
  private iss = {

  //   login:   'https://testenv.digittechnologies.org/lautech/platform/public/api/login',
  //  signup: 'https://testenv.digittechnologies.org/lautech/platform/public/api/signup'

    login: 'http://localhost:8000/api/login',
    signup: 'http://localhost:8000/api/signup'

    // login: 'http://localhost/lautech/platform/public/api/login',
    // signup: 'http://localhost/lautech/platform/public/api/signup'
    // login: environment.login,
    // signup: environment.signup,
    
  };

  constructor() { }

  handle(token) {
    this.set(token);
    // console.log(this.isValid());
  }


  set(token) {
    localStorage.setItem('token', token);
  }
  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
}
