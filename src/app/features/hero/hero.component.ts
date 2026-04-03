import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinkComponent } from '../../shared/components/link/link.component';
import { LINKS } from './data/links.data';

@Component({
  selector: 'app-hero',
  imports: [LinkComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  protected readonly LINKS_DATA = LINKS;
}
