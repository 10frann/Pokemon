import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, Result } from '../interfaces/pokemon';
import { Poke } from '../interfaces/poke';
import { PokemonImage } from '../interfaces/pokemon-image';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements OnInit {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon():Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}?limit=10277&offset=0`);
  }
  getOnePokemon(url:string):Observable<Poke>{
    return this.http.get<Poke>(url);
  }
  getImagePokemon(url:string):Observable<PokemonImage>{
    return this.http.get<PokemonImage>(url);
  }
}
