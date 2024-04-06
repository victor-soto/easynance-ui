import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SideNavService } from '../../services/side-nav.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'eznance-container',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContainerComponent implements OnInit {
  sideNavService = inject(SideNavService);

  mobileQuery: MediaQueryList;

  navList = ['Home', 'Profile', 'Statistics'];

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this.mobileQuery.addEventListener('change', this.mobileQueryListener.bind(this));
  }

  mobileQueryListener(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    this.sideNavService.sideNavToggle$.subscribe(() => {
      this.sidenav.toggle();
    });
  }
}
