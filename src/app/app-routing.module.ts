import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreComponent } from './genre/genre.component';
import {GenresComponent } from './genres-detail/genres.component';
import { GenreAddComponent } from './genre-add/genre-add.component';
import { AuthorComponent } from './author/author.component';
import { AuthorAddComponent } from './author-add/author-add.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';


const routes: Routes = [
  { path: 'genre', component: GenreComponent},
  { path: 'genre/add', component: GenreAddComponent},
  { path: 'genre/:id', component: GenresComponent },
  { path: 'author', component: AuthorComponent},
  { path: 'author/add', component: AuthorAddComponent},
  { path: 'author/id', component: AuthorDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
