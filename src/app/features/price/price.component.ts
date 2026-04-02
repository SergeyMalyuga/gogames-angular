import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {PLAN_CARDS} from '../../shared/data/plan-cards.data';
import {PlanCard} from '../../shared/components/plan-card/plan-card';
import {PlanCardModel} from '../../core/models/plan-card.model';

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
  public activeCard = signal<PlanCardModel | null>(null);

  public changeActiveCard(card: PlanCardModel): void {
    if (this.activeCard()?.title === card.title) {
      this.activeCard.set(null);
    } else {
      this.activeCard.set(card);
    }
  }
}
