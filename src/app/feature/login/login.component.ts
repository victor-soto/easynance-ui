import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { take } from 'rxjs';

import { AuthHttp } from '../../shared/http/auth-http';

@Component({
  selector: 'eznance-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {

  private readonly formBuilder = inject(NonNullableFormBuilder);

  private readonly authHttp = inject(AuthHttp);

  form!: FormGroup;

  constructor() {
    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  submit(): void {
    const form = this.form.value;
    this.authHttp.login(form).pipe(take(1)).subscribe();
  }
}
