import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPlatformsComponents } from './about-platforms.components';

describe('AboutPlatformsComponents', () => {
  let component: AboutPlatformsComponents;
  let fixture: ComponentFixture<AboutPlatformsComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPlatformsComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPlatformsComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
