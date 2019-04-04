import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AddBookPageComponent } from './components/add-book-page/add-book-page.component';
import { BookDetailsPageComponent } from './components/book-details-page/book-details-page.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StarsPipe } from './pipes/stars.pipe';
import { LastNameFirstPipe } from './pipes/last-name-first.pipe';
import { BookItemComponent } from './components/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    AddBookPageComponent,
    BookDetailsPageComponent,
    HighlightDirective,
    StarsPipe,
    LastNameFirstPipe,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
