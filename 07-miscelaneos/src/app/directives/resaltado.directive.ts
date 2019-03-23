
// ElementRef es lo uq utilizaremos para trabajar con el tag donde
// puse el nombre de mi directiva personalizada
// HostListener escuchara cuando el suaro inicie un evento en el dom
// Input nos servirá para poder recoger datos de entrada enviados desde el lugar
// donde esta siendo llamado la directiva
import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input() color: string;

  @HostListener('click') mouseEvent(){
    this.putColorOnElementDom(this.color);
  }

  constructor(private el:ElementRef) {
    console.log('Contructor de directiva appResaltado llamada');
  }

  putColorOnElementDom(color:string) {
    let dom= this.el.nativeElement.style.backgroundColor;

    if (dom == '' ) {
      this.el.nativeElement.style.backgroundColor = color;
    } else {
      this.el.nativeElement.style.backgroundColor  = '';
    }
  }

}
