import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CharacterComponent } from './components/character/character.component';
import { QuotesComponent } from './components/quotes/quotes.component';

const routes: Routes = [
  {path: '', component: CharacterComponent},
  // {path: 'quotes', component: QuotesComponent},
  // {path: 'quotes/:author', component: QuotesComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
