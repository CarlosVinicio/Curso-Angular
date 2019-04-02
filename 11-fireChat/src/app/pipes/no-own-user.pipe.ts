import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noOwnUser'
})
export class NoOwnUserPipe implements PipeTransform {

  transform(value: any, args?: any): any {


    return null;
  }

}
