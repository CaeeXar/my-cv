import { Component } from '@angular/core';
import { Shell } from './core/layout/shell/shell';
import { provideIcons } from '@ng-icons/core';
import { APP_ICONS } from './shared/icons/app-icons';

@Component({
  selector: 'app-root',
  imports: [Shell],
  templateUrl: './app.html',
  styleUrl: './app.css',
  viewProviders: [provideIcons(APP_ICONS)],
})
export class App {}
