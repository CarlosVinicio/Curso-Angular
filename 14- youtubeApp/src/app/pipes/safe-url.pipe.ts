import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";


@Pipe( {
    name: 'safeUrl'
} )
export class SafeUrlPipe implements PipeTransform {

    constructor( private donSanitizer: DomSanitizer ) {

    }

    transform( value: any, args?: any ): any {
        let url = "https://www.youtube.com/embed/";

        return this.donSanitizer.bypassSecurityTrustResourceUrl(url + value);
    }

}
