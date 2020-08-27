import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';
import { Genre } from '../genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  constructor( private genreService: GenreService) { }
  genres;

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.genreService.getAll().subscribe(
      data =>
      { this.genres = data
        console.log(data);
      }
    )
  }


delete(genre: Genre){
  const genreIndex = this.genres.findIndex(g => g.id === genre.id);
  this.genres = this.genres.filter( (g) => g.id != genre.id)
  this.genreService.delete(genre.id).subscribe(
  () => {console.log("elemenet supprimé")},
  err => this.genres.splice(genreIndex, 0, genre) //TODO : afficher une erreur à l'écran
  )
}
}
