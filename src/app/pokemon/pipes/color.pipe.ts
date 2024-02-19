import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(type: string ): string {
    switch (type) { 
      case 'grass':
        return "green"
      case 'fire':
        return "red"
      case 'water':
        return "blue"
      case 'bug-ground':
        return "brown"
      case 'normal':
        return "gray"
      default :
        return "white"
    }
  }
}
