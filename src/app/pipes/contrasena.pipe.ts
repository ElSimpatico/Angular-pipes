import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activo: boolean): string {
    if (activo) {
      return value.replace(/./g, '*');
    }

    return value;
  }

}
