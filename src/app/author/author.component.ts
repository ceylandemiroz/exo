import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { Author } from '../author';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private authorService: AuthorService ) { }
 authors;
  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.authorService.getAll().subscribe(
      data =>
      {
        this.authors = data
        console.log(data);
      }
    )
  }
  delete(author: Author){
    //a>içinde digerini bul.
    const authorIndex = this.authors.findIndex(a => a.id === author.id);
    this.authors = this.authors.filter( (a) => a.id != author.id)
    this.authorService.delete(author.id).subscribe(
    () => {console.log("supprimé")},
    err => this.authors.splice(authorIndex, 0, author)
    )
  }
}
