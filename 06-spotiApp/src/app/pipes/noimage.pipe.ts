import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  /**
   * @param value es la url de la imagen
   */
  transform(value: any): any {
    if (value.length === 0) {
      return 'assets/img/no-image.png';
    } else {
      return value[0].url;
    }

  }

}
