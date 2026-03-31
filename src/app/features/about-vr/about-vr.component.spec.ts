import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVrComponent } from './about-vr.component';

describe('AboutVrComponent', () => {
  let component: AboutVrComponent;
  let fixture: ComponentFixture<AboutVrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutVrComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutVrComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
