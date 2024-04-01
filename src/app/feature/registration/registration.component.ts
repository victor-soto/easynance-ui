import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthHttp } from '../../shared/http/auth-http';
import { take } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'eznance-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
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
