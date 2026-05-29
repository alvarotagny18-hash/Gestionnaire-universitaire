import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Etudiants } from './pages/etudiants/etudiants';
import { Professeurs } from './pages/professeurs/professeurs';
import { Cours } from './pages/cours/cours';
import { Notes } from './pages/notes/notes';
import { EmploiDuTemps } from './pages/emploi-du-temps/emploi-du-temps';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'etudiants', component: Etudiants },
  { path: 'professeurs', component: Professeurs },
  { path: 'cours', component: Cours },
  { path: 'notes', component: Notes },
  { path: 'emploi-du-temps', component: EmploiDuTemps },
  { path: '**', redirectTo: 'login' }
];
