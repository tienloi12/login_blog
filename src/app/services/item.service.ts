import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient : HttpClient ) { }

  getAllItem()
  {
    return this.httpClient.get(`${environment.api_url}item`);
  }
}
