# Validación formulario (Reactive Form)

### Importación en el componente

- FormGroup
- FormControl
- Validators

### Importación en el módulo

- FormsModule
- ReactiveFormsModule

### Ejemplo validación con clases de bootstrap 4 en template

` <form [formGroup]="forma" (ngSubmit)="onSubmit()"> 
` 
` <input
`           class="form-control"
`           type="text"
`           placeholder="Nombre"
`           formControlName="nombre"
`           [ngClass]="{ 'is-invalid': submitted && f.nombre.errors }"
` />
` 
`  <div *ngIf="submitted && f.nombre.errors" class="invalid-feedback">
`           <div *ngIf="f.nombre.errors.required">El nombre es requerido</div>
`           <div *ngIf="f.nombre.errors.minlength">El nombre tiene que tener mínimo 5 letras</div>
` </div>

### Ejemplo en el componente 

> export class ReactiveComponent {
>  forma: FormGroup;
>  submitted = false;
>
>  constructor() {
>    this.forma = new FormGroup({
>      nombre: new FormControl("", [Validators.required, >Validators.minLength(5)]),
>      apellido: new FormControl("", Validators.required),
>      correo: new FormControl("", [Validators.required, >Validators.pattern("^[^@]+@[^@]+\.[a-zA-Z]{2,}$")])
>    });
>  }
>
>  get f(){
>    return this.forma.controls
>  }
>
>  onSubmit() {
>    if (this.forma.invalid){
>      this.submitted = true;
>      return false;
>    } 
>    this.submitted = false;
>    console.log(this.forma.value);
>    console.log(this.forma);
>
>    this.forma.reset({
>      nombre: '',
>      apellido: '',
>      correo: '',
>    })
>
>  }
>}

