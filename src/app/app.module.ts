import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';  
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//THIRD PARTY & Dependants
import { MdButtonModule, MdCardModule, MdListModule, MdIconModule, MdProgressSpinnerModule,
  MdSelectModule,
   MdToolbarModule} from '@angular/material';
import { MdInputModule } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { BookEditorComponent } from './book-editor/book-editor.component';
import { RecentEditionsComponent } from './recent-editions/recent-editions.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookTileComponent } from './book-tile/book-tile.component';
import { BookLineComponent } from './book-line/book-line.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './title/title.component';

//DATA SERVICES
import {LibraryService} from './library.service';
import { BookListComponent } from './book-list/book-list.component';
import { CatalogByAuthorComponent } from './catalog-by-author/catalog-by-author.component';
import { TestPipe } from './pipes/test.pipe';
import { StatusPipe } from './pipes/status.pipe';
import { Settings} from './app.settings';
import { CatalogBySubjectComponent } from './catalog-by-subject/catalog-by-subject.component';
import { LoginComponent } from './login/login.component';

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
    BookLineComponent,
    BookingHistoryComponent,    
    BreadcrumbsComponent, TitleComponent, BookListComponent, CatalogByAuthorComponent, TestPipe, StatusPipe, CatalogBySubjectComponent, LoginComponent
  ],
  imports: [
    
    BrowserAnimationsModule,
     MdButtonModule,
     MdCardModule,
     MdListModule,
     MdToolbarModule,
     MdIconModule.forRoot(),
     MdInputModule,
     MdSelectModule,
     MdProgressSpinnerModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LibraryService,Settings],
  bootstrap: [AppComponent]
})
export class AppModule { }
