import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { take } from 'rxjs';

import { AuthHttp } from '../../shared/http/auth-http';

@Component({
  selector: 'eznance-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {

  private readonly formBuilder = inject(NonNullableFormBuilder);

  private readonly authHttp = inject(AuthHttp);

  private readonly router = inject(Router);

  form!: FormGroup;

  constructor() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.email]],
      password: ['']
    });
  }

  submit(): void {
    const form = this.form.value;
    this.authHttp.login(form).pipe(take(1)).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      }
    });
  }
}
