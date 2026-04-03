import {DOCUMENT, inject, Injectable} from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class BodyService {
  private document = inject(DOCUMENT);
  private body = this.document.body;
  private readonly NO_SCROLL_CLASS = 'no-scroll';

  public setOverflow(isNoScroll: boolean) {
    this.body.classList.toggle(this.NO_SCROLL_CLASS, isNoScroll);
  }
}
