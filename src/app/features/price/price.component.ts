import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-price',
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceComponent {}
