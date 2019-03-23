import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, args?: any): any {
      console.log('value: ' + value + ' arg: ' + args);
      let result:string = value;

      if (!args) {
          result = '';
          for (let i = 0; i < value.length; i++) {
              result += '*';
          }
      }

    return result;
  }

}
