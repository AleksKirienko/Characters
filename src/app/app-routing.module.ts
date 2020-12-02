import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CharacterComponent } from './pages/character/character.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { AuthorizationComponent } from './pages/authorization/authorization.component';

const routes: Routes = [
  {path: '', component: AuthorizationComponent},
  {path: 'characters', component: CharacterComponent},
  {path: 'quote/:author', component: QuotesComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
