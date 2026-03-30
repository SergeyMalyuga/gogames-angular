import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {LINKS} from './data/links.data';
import {LinkComponent} from '../../shared/components/link/link.component';
import {ScreenService} from '../../core/services/screen.service';

@Component({
  selector: 'app-header',
  imports: [
    LinkComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public screenService = inject(ScreenService);
  protected readonly LINKS_DATA = LINKS;
  public isNavOpen = signal<boolean>(!this.screenService.isTablet());

  public toggleNav() {
    this.isNavOpen.set(!this.isNavOpen());
  }
}
