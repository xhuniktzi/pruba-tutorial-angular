import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  url: string =  'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonList(offset: number, limit: number) {
    return this.http.get(`${this.url}/pokemon?offset=${offset}&limit=${limit}`);
  }
  
  getPokemonByName(name: string) {
    return this.http.get(`${this.url}/pokemon/${name}`);
  }
}
