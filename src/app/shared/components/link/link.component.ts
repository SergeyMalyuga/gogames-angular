import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {LinkModel} from '../../../core/models/link.model';
import {LinkType} from '../../../core/constants/consts';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-link',
  imports: [
    NgClass
  ],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input({required: true}) link!: LinkModel;
  protected readonly LinkType = LinkType;
}
