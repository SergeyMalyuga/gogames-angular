import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponent} from '../../features/header/header.component';
import {HeroComponent} from '../../features/hero/hero.component';
import {AboutVrComponent} from '../../features/about-vr/about-vr.component';
import {AboutPlatformsComponents} from '../../features/about-platforms/about-platforms.components';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutVrComponent,
    AboutPlatformsComponents
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
