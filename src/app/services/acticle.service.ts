import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActicleService {

  constructor(private http:HttpClient) { }
  url =' https://social.runwayclub.dev/api/articles/';
  getArticles(page:number,itemPerPage:number){
    return this.http.get(`${this.url}/latest?page=${page}&per_page=${itemPerPage}`)
  }
}
