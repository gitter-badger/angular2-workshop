import {Injectable} from 'angular2/core';
import {Http, Headers, Request, RequestMethod, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Api {
  apiHost: string = 'http://localhost:8081';

  constructor(public http: Http) {
  }

  getHeaders(): Headers {
    let headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');

    return headers;
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
        console.log('API error', res.status);
      });
  }
}
