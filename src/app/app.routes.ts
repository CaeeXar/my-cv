import { Routes } from '@angular/router';
import { ReadmeView } from './features/file-preview/readme-view/readme-view';
import { ExperienceView } from './features/file-preview/experience-view/experience-view';

export const routes: Routes = [
  { path: '', component: ReadmeView },
  { path: 'readme', component: ReadmeView },
  { path: 'experience', component: ExperienceView },
];
