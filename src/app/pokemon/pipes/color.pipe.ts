import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: string, type: string ): string {
    switch (type) { 
      case 'grass':
        return `<span style="color: green;">${value}</span>`
      default :
        return value
    }
  }
}
