import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthHttp } from '../../shared/http/auth-http';
import { take } from 'rxjs';

@Component({
  selector: 'eznance-registration',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export default class RegistrationComponent {
  private readonly formBuilder = inject(NonNullableFormBuilder);

  private readonly authHttp = inject(AuthHttp);

  form!: FormGroup;

  constructor() {
    this.form = this.formBuilder.group({
      username: [''],
      email: ['', [Validators.email]],
      password: [''],
      firstName: [''],
      lastName: [''],
    });
  }

  submit(): void {
    const form = this.form.value;
    if (this.form.valid) {
      this.authHttp.register(form).pipe(take(1)).subscribe();
    }
  }
}
