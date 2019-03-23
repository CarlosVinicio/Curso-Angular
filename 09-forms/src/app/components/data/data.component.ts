import {Component, OnInit} from '@angular/core';
// Para manejar los formularios de forma reactiva(data no template) necesitamos importar:
import {
    FormGroup,
    FormControl,
    Validators,
    ValidationErrors,
    EmailValidator,
    FormArray,
    FormArrayName
} from '@angular/forms';
import {Observable} from "rxjs";
import {FakeapiService} from "../../services/fakeapi.service";
import {error} from "@angular/compiler/src/util";
import {forEach} from "@angular/router/src/utils/collection";



// En este componente trabajamos con formularios reactivos
@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styles: []
})
export class DataComponent {

    forma: FormGroup;

    usuario:Object = {
        nombreCompleto: {
            nombre:   'Carlos',
            apellido: 'Guamán'
        },
        correo: 'carlos@gmail.com',
        hobbies: ['Runing', 'Cinema', 'Eat'] // el objeto puede tener arrays
    };

    constructor(private _fakeApi: FakeapiService) {

        // Validacion con un objeto mas complejo (Agrupaciones de objetos)
        this.forma = new FormGroup({
            'nombreCompleto' : new FormGroup({
                'name': new FormControl('', Validators.required),
                'surname': new FormControl(
                    '',
                    [
                        Validators.required,
                        Validators.minLength(3)
                    ]
                ),
            }),
            'email': new FormControl(
                '',
                [
                    Validators.required,
                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
                ]
            ),
            'hobbies': new FormArray([
                    new FormControl('Runing' , Validators.required),
                    new FormControl('Eat' , Validators.required)
                ]
            ),
            // Con esta propiedad vamos a practicar las validaciones personalizadas
            'passwords': new FormGroup({
                'password1' : new FormControl('', Validators.required),
                'password2' : new FormControl('', Validators.required)

            }),
            // con username vamos a practiar las validaciones asincronas que a su ves tambien es personalizada(FormControl tiene 3 parametros
            // el 1: es el valor que le queremos dar por defecto, ell 2 los validadores normales o instantaneos y
            // el 3 son los validadores asincronos tanto el 2 como el 3 pueden ser arrays ya que puede haber mas de
            // una validacion
            // )
            'username': new FormControl('', Validators.required, this.usernameExists)
        });
        // Para dar valores iniciales a nuestro forma(form) tenemos que setarle los datos
        // Para que se pueda setear los datos, estos datos tienen que tener la misma
        // estructura que el forma.como en este ejemplo this.forma tiene la misma estructura
        // que this.usuario
       // this.forma.setValue(this.usuario);

        // Otra manera de agregar validaciones a propiedades de nuestro form es con el metodo setValidators
        this.forma.get('passwords.password2').setValidators([
            Validators.required,
            this.passwordsAreEquals
        ])

        // Para hacer un watcher al estilo angularjs podremos hacerlo para poder esuchar TODOs el formulario o por cada campo
        this.forma.valueChanges.subscribe( // de esta forma escuchamos los cambios de todos el formulario
            data=>{
                console.log(data);
            }
        );

        this.forma.get('nombreCompleto.name').valueChanges.subscribe( // de esta forma escuchamos los cambios solo del nombre
            data=>{
                console.log(data);
            }
        )


    }

    addHobby(){

        // <FormArray> es una forma de decirle a TS que forma.controls['hobbies] es de tipo
        // FormArray
        (<FormArray>this.forma.controls['hobbies']).push(new FormControl(''));
    }

    // Ejemplo de funcion para validacion personalizada
    //siempre recibe como parametro una variable de tipo FormControl y
    // devuelve un objecto cuya clave es string y su valor es booleano
    passwordsAreEquals = (control: FormControl): {[s:string]: boolean} => {
        // si la funcion devuelve TRUE queire decir que la validacion ha fallado
        // Para que la validacion sea correcta debemos devolver un NULL
        let password1 = this.forma.get('passwords.password1').value;
        let password2 = control.value;

        if (password1 != password2) {
            return {
                differentPass:true
            }
        }
        return null;
    };
    // Las validaciones personalizadas deben devolver obligarotiamente un Observable o Promise
    usernameExists = (control: FormControl):Promise<any> | Observable<any> => {
        let promise = new Promise(
            ((resolve, reject) => {
                setTimeout(()=> {
                    if (control.value == 'car') {
                        resolve({exists:true})
                    } else {
                        resolve(null);
                    }
                },4000)
            })
        );

        return promise;
    };

    save() {

        // Cuando se envia el formulario tenemso que reiniciarlo es decir
        // que sus campos esten vacios y esten en estado untouched invalid y pristine
        // (pristine: el usuario no ha modificado el campo)
        // PARA PODER resetearlo
        this.forma.reset();

        console.log(this.forma);
    }

}
