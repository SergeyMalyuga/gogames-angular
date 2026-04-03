import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { LINKS } from './data/links.data';
import { LinkComponent } from '../../shared/components/link/link.component';
import { ScreenService } from '../../core/services/screen.service';
import { BodyService } from '../../core/services/body.service';

@Component({
  selector: 'app-header',
  imports: [LinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private bodyService = inject(BodyService);

  public screenService = inject(ScreenService);
  protected readonly LINKS_DATA = LINKS;
  public isNavOpen = signal<boolean>(false);

  constructor() {
    effect(() => {
      const isTablet = this.screenService.isTablet();

      if (!isTablet) {
        this.isNavOpen.set(false);
        this.bodyService.setOverflow(false);
      }
    });
  }

  public toggleNav() {
    this.isNavOpen.set(!this.isNavOpen());
    this.bodyService.setOverflow(this.isNavOpen());
  }
}
