import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LINKS } from '../../shared/data/links.data';
import { LinkComponent } from '../../shared/components/link/link.component';

@Component({
  selector: 'app-about-platforms',
  imports: [LinkComponent],
  templateUrl: './about-platforms.components.html',
  styleUrl: './about-platforms.components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPlatformsComponents {
  protected readonly LINKS_DATA = LINKS;
}
