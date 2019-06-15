import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent  {

  forma:FormGroup
  submitted = false;

  constructor() {
    this.forma = new FormGroup({
      'nombre': new FormControl('',Validators.required),
      'apellido': new FormControl('', Validators.required),
      'correo': new FormControl('', [Validators.required, Validators.pattern("^[^@]+@[^@]+\.[a-zA-Z]{2,}$")])
    })
   }

   get f(){
     return this.forma.controls;
   }

   guardarCambios(){
     this.submitted = true;

     if(this.forma.invalid){
       return false;
     }
     console.log(this.forma.value);
     console.log(this.forma);
   }

}
