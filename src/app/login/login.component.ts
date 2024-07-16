import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ValidationErrors } from '@angular/forms';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  service = inject(LoginService)

  public form:FormGroup = new FormGroup ({
    email: new FormControl('',  {validators: [Validators.required, Validators.minLength(8)]}),
    password: new FormControl('',  {validators: [Validators.required, Validators.minLength(4)]})
  })
  onSubmit(){
    if(this.form.valid){
     // this.service.postPassword(this.form.value)
      this.form.reset();
    }
}
}
