import { Pipe, PipeTransform } from '@angular/core';

// Para hacer una url segura necesitamos importar DomSanitizer
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
    name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

    /*
        Para poder usar DomSanitizer necesito declararlo en  mi constructor
    */
    constructor(private domSanitizer:DomSanitizer) {

    }

    transform(value: any, url: any): any {
        // sanitize recibe como parametro el url del cual quiero asegurar que es seguro y válido
        // url es el argumento( https://www.youtube.com/embed/) pasado desde la utilizacion del pipe (urlVideo | safeUrl: https://www.youtube.com/embed/) en app.component.html
        // value es el valor de la propiedad donde se usa el pipe (gJRGkvNqrY4)
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value); // devuelve https://www.youtube.com/embed/gJRGkvNqrY4 Ahora no habra ningun tipo de problema al ejecutar
                                                                            // por ejemplo url que vengan desde apis etc,.
    }

}
