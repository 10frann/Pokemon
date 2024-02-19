import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './pages/list-pokemon/list-pokemon.component';
import { pokemonGuardGuard } from './guards/pokemon-guard.guard';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { MasInfoComponent } from './pages/mas-info/mas-info.component';

const routes: Routes = [
  { path: '', children: [
    {path: '', component: ListPokemonComponent, canActivate: [pokemonGuardGuard]},
    {path: 'masInfo', component: MasInfoComponent},
    {path: 'pokemon/:url', component: PokemonComponent},
    {path: '**', redirectTo:''}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
