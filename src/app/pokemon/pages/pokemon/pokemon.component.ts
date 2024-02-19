import { Component, OnInit } from '@angular/core';
import { Poke } from '../../interfaces/poke';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { PokemonImage } from '../../interfaces/pokemon-image';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit{
  pokemon!:Poke;
  pokemonImage!:PokemonImage;

  constructor(private service: PokemonService, private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap( ({url}) => this.service.getOnePokemon(url))
    ).subscribe(data => {
      return (!data) ? this.router.navigateByUrl('') : 
      (this.pokemon = data, this.getImagePokemon(data.forms[0].url));
    })
  }
  getImagePokemon(url:string):void{
    this.service.getImagePokemon(url).subscribe(data => {
      this.pokemonImage = data;
    })
  }
}
