import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './pages/character/character.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterStatusPipe } from './shared/pipes/filter-status.pipe';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { AuthorizationComponent } from './pages/authorization/authorization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    FilterStatusPipe,
    NotFoundComponent,
    QuotesComponent,
    MenuComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
