import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, Result } from '../../interfaces/pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent implements OnInit{
  pokemons:Result[] = [];
  currentPage = 1;
  totalPokemons = 0;
  totalPage = 0;

  constructor(private service:PokemonService) {}

  ngOnInit(): void {
    this.getPokemon()
  } 

  getPokemon():void{
    this.service.getPokemon().subscribe(data => {
      this.totalPokemons = data.count;
      this.totalPage = Math.ceil(this.totalPokemons / 102);
      const startIndex = (this.currentPage - 1) * 102;
      const endIndex = Math.min(startIndex + 102, this.totalPokemons);
      this.pokemons = data.results.slice(startIndex, endIndex);
    })
  }
  loadNextPage(): void {
    const nextPage = this.currentPage+1;
    if (nextPage <= Math.ceil(this.totalPokemons / 102)){
      this.currentPage++;
      this.getPokemon();
    }
  }
  loadPreviusPage(): void{
    if (this.currentPage>1){
      this.currentPage--;
      this.getPokemon();
    }
  }
  getOnePokemon(url:string):void{
    this.service.getOnePokemon(url).subscribe(data => console.log(data));
  }
}
