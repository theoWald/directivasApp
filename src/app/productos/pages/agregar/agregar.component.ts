import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre:  ['', Validators.required],
    nombre2:  ['', Validators.required],
    nombre3:  ['', Validators.required],
    nombre4:  ['', Validators.required]
  });

  texto1: string = 'Ana Lucia';
  color: string = 'blue';

  constructor( private fb: FormBuilder) { }

  tieneError( campo: string ): boolean{
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre(){
    this.texto1 = Math.random().toString();
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
