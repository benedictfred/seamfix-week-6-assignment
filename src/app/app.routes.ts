import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Programmes } from './programmes/programmes';
import { Resources } from './resources/resources';
import { Events } from './events/events';
import { Media } from './media/media';
import { Opportunities } from './opportunities/opportunities';
import { Community } from './community/community';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'programmes', component: Programmes },
  { path: 'resources', component: Resources },
  { path: 'events', component: Events },
  { path: 'media', component: Media },
  { path: 'opportunities', component: Opportunities },
  { path: 'community', component: Community },
  { path: 'login', component: Login },
  { path: '**', redirectTo: '' },
];
