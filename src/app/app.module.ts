import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdCardModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { BookEditorComponent } from './book-editor/book-editor.component';
import { RecentEditionsComponent } from './recent-editions/recent-editions.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookTileComponent } from './book-tile/book-tile.component';
import { BookLineComponent } from './book-line/book-line.component';
 


@NgModule({
  declarations: [
  
    AppComponent,
    HomeComponent,
    CatalogListComponent,
    BookEditorComponent,
    RecentEditionsComponent,
    NavbarComponent,
    BookViewComponent,
    BookTileComponent,
    BookLineComponent
  ],
  imports: [
    BrowserAnimationsModule,
     MdButtonModule,
     MdCardModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
