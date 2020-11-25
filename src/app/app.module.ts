import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './pages/character/character.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterStatusPipe } from './core/pipes/filter-status.pipe';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    FilterStatusPipe,
    NotFoundComponent,
    QuotesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
