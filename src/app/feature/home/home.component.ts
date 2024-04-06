import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ContainerComponent } from '../../shared/components/container/container.component';

@Component({
  selector: 'eznance-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {


}
