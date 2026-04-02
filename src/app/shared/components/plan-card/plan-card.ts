import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {PlanCardModel} from '../../../core/models/plan-card.model';
import {PLAN_LINKS} from './data/plan-links.data';
import {LinkComponent} from '../link/link.component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-plan-card',
  imports: [
    LinkComponent,
    NgClass
  ],
  templateUrl: './plan-card.html',
  styleUrl: './plan-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanCard {
  @Input({required: true}) card!: PlanCardModel;
  @Input({required: true}) activeCard!: PlanCardModel | null;
  @Output() clicked = new EventEmitter<PlanCardModel>();

  public LINKS_DATA = PLAN_LINKS;

  public onClick() {
    this.clicked.emit(this.card);
  }
}
