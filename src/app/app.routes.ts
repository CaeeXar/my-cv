import { Routes } from '@angular/router';

import { ReadmeView } from './features/file-preview/readme-view/readme-view';
import { ExperienceView } from './features/file-preview/experience-view/experience-view';

export const APP_ROUTES = {
  readme: 'readme',
  experience: 'experience',
};

export const routes: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTES.readme,
    pathMatch: 'full',
  },
  {
    path: APP_ROUTES.readme,
    component: ReadmeView,
  },
  {
    path: APP_ROUTES.experience,
    component: ExperienceView,
  },
];
