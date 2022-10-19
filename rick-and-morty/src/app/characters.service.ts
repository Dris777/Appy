import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

 private url = 'https://rickandmortyapi.com/api/character/'
  constructor(private httpClient:HttpClient,) { }


getData(){
   return this.httpClient.get(this.url)
}
}
