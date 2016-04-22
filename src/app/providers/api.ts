import {Injectable} from 'angular2/core';
import {Http, Headers, Request, RequestMethod, Response} from 'angular2/http';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Api {
  apiHost: string = 'http://localhost:8081';

  constructor(public http: Http,
              public router: Router) {
  }

  getHeaders(): Headers {
    let headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.getToken()}`);
    headers.append('X-Requested-With', 'XMLHttpRequest');

    return headers;
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    let authenticated: boolean = !!this.getToken();

    if (!authenticated) {
      this.router.navigate(['/Login']);
    }

    return authenticated;
  }

  request(method: RequestMethod, url: string, options: any = {}): Observable<Response> {
    if (options.body) {
      if (typeof options.body !== 'string') {
        options.body = JSON.stringify(options.body);
      }
    }

    return this.http.request(
      new Request({
        method,
        url: `${this.apiHost}${url}`,
        headers: this.getHeaders(),
        search: options.search,
        body: options.body
      }))
      .catch((res: Response): any => {
        switch (res.status) {
          case 401:
            this.router.navigate(['/Login']);
        }
      });
  }
}
