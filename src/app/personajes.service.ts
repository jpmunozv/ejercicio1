import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(protected http: HttpClient) { }

  //https://rickandmortyapi.com/api/character

  getPersonajes() {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }
}
