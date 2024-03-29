import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthHttp } from './shared/http/auth-http';

@Component({
  selector: 'eznance-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [AuthHttp],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-easynance';
}
