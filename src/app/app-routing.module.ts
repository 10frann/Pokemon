import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pokemonGuardGuard } from './pokemon/guards/pokemon-guard.guard';

const routes: Routes = [
  {path: 'pokemon', loadChildren: () => import('./pokemon/pokemon.module').then(module => module.PokemonModule)},
  {path: '**', redirectTo:'pokemon', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
