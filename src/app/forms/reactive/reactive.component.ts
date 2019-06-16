import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive",
  templateUrl: "./reactive.component.html",
  styles: []
})
export class ReactiveComponent {
  forma: FormGroup;
  submitted = false;

  constructor() {
    this.forma = new FormGroup({
      nombre: new FormControl("", [Validators.required, Validators.minLength(5)]),
      apellido: new FormControl("", Validators.required),
      correo: new FormControl("", [Validators.required, Validators.pattern("^[^@]+@[^@]+\.[a-zA-Z]{2,}$")])
    });
  }

  get f(){
    return this.forma.controls
  }

  onSubmit() {
    if (this.forma.invalid){
      this.submitted = true;
      return false;
    } 
    this.submitted = false;
    console.log(this.forma.value);
    console.log(this.forma);

    this.forma.reset({
      nombre: '',
      apellido: '',
      correo: '',
    })

  }
}
