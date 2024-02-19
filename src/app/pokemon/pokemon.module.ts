import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { MasInfoComponent } from './pages/mas-info/mas-info.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ListPokemonComponent } from './pages/list-pokemon/list-pokemon.component';
import { ColorPipe } from './pipes/color.pipe';


@NgModule({
  declarations: [
    ListPokemonComponent,
    MasInfoComponent,
    PokemonComponent,
    ColorPipe
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    HttpClientModule,
    RouterModule
  ]
})
export class PokemonModule { }
