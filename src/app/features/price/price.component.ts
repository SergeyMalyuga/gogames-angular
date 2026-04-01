import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PLAN_CARDS} from '../../shared/data/plan-cards.data';
import {PlanCard} from '../../shared/components/plan-card/plan-card';

@Component({
  selector: 'app-price',
  imports: [
    PlanCard
  ],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceComponent {
  public CARDS = PLAN_CARDS;
}
