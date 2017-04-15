import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import {CatalogListComponent} from './catalog-list/catalog-list.component';
import {BookEditorComponent} from './book-editor/book-editor.component';
import {RecentEditionsComponent} from './recent-editions/recent-editions.component';
import {BookViewComponent} from './book-view/book-view.component';
import {CatalogByAuthorComponent} from './catalog-by-author/catalog-by-author.component';
import {CatalogBySubjectComponent} from './catalog-by-subject/catalog-by-subject.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '',     component: HomeComponent ,
    children: []
  },
    { path: 'home', component: HomeComponent },
    { path: 'catalog', component: CatalogListComponent },
    { path: 'collection/add', component: BookEditorComponent },
    { path: 'collection/edit', component: BookEditorComponent },
    { path: 'catalog/view/:prefix/:booknumber', component:BookViewComponent },
    { path: 'catalog/recent', component: RecentEditionsComponent },
    { path: 'catalog/:subject', component: CatalogBySubjectComponent },
    { path: 'authors/:author', component: CatalogByAuthorComponent },
    { path: 'login', component: LoginComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
