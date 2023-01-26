import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>(
      'https://api.unsplash.com/search/photos?page=1&query=books&client_id=XenapBw_svKKnLEsJwwtJRcV4LqteP5IQDQ6r3EagHQ'
    );
  }
}
