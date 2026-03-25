import { ChangeDetectionStrategy, Component } from '@angular/core';
import {LINKS} from './data/links.data';
import {LinkComponent} from '../../shared/components/link/link.component';

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
  protected readonly LINKS_DATA = LINKS;
}
