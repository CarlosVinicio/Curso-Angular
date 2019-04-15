import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
