import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { delay } from 'rxjs';

export const pokemonGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const fecha = new Date().getDay();
  console.log(fecha);
  if (fecha>0 && fecha<6) {
    delay(20000)
    return true;
  } else if(fecha == 6){
    delay(5000)
    return true;
  } else {
    return false;
  }
};
