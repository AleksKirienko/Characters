import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  clickMessage = '';
  fullNameControl: FormGroup;

  // tslint:disable-next-line:typedef
  private static checkPasswords(group: FormGroup) {
    const pass = group.get('password').value;
    const confirmPass = group.get('secondPass').value;
    return pass === confirmPass ? null : {notSame: true};
  }

  ngOnInit(): void {
    this.initForm();
    this.fullNameControl.valueChanges.subscribe(value => console.log(value));
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    const controls = this.fullNameControl.controls;
    /** Проверяем форму на валидность */
    if (this.fullNameControl.invalid) {
      Object.keys(controls)
        /** Если форма не валидна, то помечаем все контролы как touched */
        .forEach(controlName => controls[controlName].markAsTouched());
      /** Прерываем выполнение метода */
      return;
    }

    console.log(this.fullNameControl.value);
  }

  // tslint:disable-next-line:typedef
  initForm() {
    this.fullNameControl = this.formBuilder.group({
      firstName: ['', [
        Validators.pattern(/[A-z]/)
      ]],
      lastName: ['', [
        Validators.pattern(/[A-z]/)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.min(6),
        // Validators.pattern(/[0-9]+[a-zA-Z]/)
      ]],
      secondPass: ['', [
        Validators.required,
        Validators.min(6),
        // Validators.pattern(/[0-9]+[a-zA-Z ]/),
        RxwebValidators.compare({fieldName: 'password'})
        // this.customValidator
      ]]
    }, {validator: AuthorizationComponent.checkPasswords});

  }

  // tslint:disable-next-line:typedef
  customValidator(control: FormControl) {
    return {isEqual: control.value === this.fullNameControl.controls.password.value};
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.fullNameControl.controls[controlName];
    return control.invalid && control.touched;
  }

  // tslint:disable-next-line:typedef
  loginClick() {
    // tslint:disable-next-line:max-line-length
    if (this.isControlInvalid('email') === false || this.isControlInvalid('password') === false || this.isControlInvalid('secondPass') === false) {
      this.clickMessage = 'Не все поля введены!';
    } else {
      this.clickMessage = 'Пользователь зарегистрирован!';
    }
  }
}
