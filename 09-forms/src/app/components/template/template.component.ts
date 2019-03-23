import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms"; // de esta forma sabremos que nos esta llegando desde el formulario

@Component({
    selector: 'app-template',
    templateUrl: './template.component.html',
    styles: [
        `
            .ng-invalid.ng-touched:not(form){
                border: 1px solid red;
            }
        `
    ]
})
export class TemplateComponent implements OnInit {

    // objeco de ejemplo para como cargar datos por defecto en el formulario
    user: Object = {
        name: 'Carlos',
        surname: 'Guaman',
        email:'carlos@gmail.com',
        country: '',
        gender: 'Male',
        acept: false
    };


    countries = [
        { code: 'Es', name: 'España' },
        { code: 'Fr', name: 'Francia'},
        { code: 'It', name: 'Italia'},
        { code: 'Pt', name: 'Portugal'}
    ];

    genders:string[] = [
        'Male',
        'Female',
        'Others'
    ];

    constructor() {
    }

    ngOnInit() {
    }

    save(formData: NgForm) {
        console.log(formData);
        console.log('entro al formulario')
    }

}
