import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinkComponent } from '../../shared/components/link/link.component';
import { LINKS } from '../../shared/data/links.data';

@Component({
  selector: 'app-about-vr',
  imports: [LinkComponent],
  templateUrl: './about-vr.component.html',
  styleUrl: './about-vr.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutVrComponent {
  protected readonly LINKS_DATA = LINKS;
}
