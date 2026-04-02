import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {PlanCardModel} from '../../../core/models/plan-card.model';
import {PLAN_LINKS} from './data/plan-links.data';
import {LinkComponent} from '../link/link.component';

@Component({
  selector: 'app-plan-card',
  imports: [
    LinkComponent
  ],
  templateUrl: './plan-card.html',
  styleUrl: './plan-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanCard {
  @Input({required: true}) card!: PlanCardModel;
  @Input({required: true}) activeCard!: PlanCardModel | null;

  public LINKS_DATA = PLAN_LINKS;
}
