import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakeapiService {

  constructor(private http: HttpClient) { }

    getUsers() {
      return this.http.get('https://jsonplaceholder.typicode.com/users');
    }
}
