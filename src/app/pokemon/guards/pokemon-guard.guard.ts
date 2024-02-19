import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const pokemonGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const fecha = new Date().getDay();
  console.log(fecha);
  if (fecha>0 && fecha<6) {
    setTimeout(() => {
      router.navigate(['/pokemon']);
    }, 2000)
    return false;
  } else if(fecha == 6){
    setTimeout(() => {
      router.navigate(['/pokemon']);
    }, 5000)
    return false;
  } else {
    return false;
  }
};
