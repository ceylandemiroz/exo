import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';
import { ActivatedRoute } from '@angular/router';
import { Genre } from '../genre';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-genres-detail',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
 

  constructor(private genreService: GenreService, private route: ActivatedRoute, private fb: FormBuilder) { }

 genre: Genre;
 formEdit: FormGroup;

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.genreService.get(id).subscribe(
      data =>
      { this.genre = data;
        this.formEdit = this.initForm();

      }
    )
  }


initForm(): FormGroup{
  return this.fb.group(
    {
      name: [this.genre.name]
    }
  )

}
edit(): void{
  const genreUpdate:Genre = this.formEdit.value;
  genreUpdate.id = this.genre.id;
  //asagida ki this.genre= data update oldugunda hala local de eski veriyi gosteriyordu, data uerine geri gondersin diye yazildi
  this.genreService.update(genreUpdate).subscribe(data => {this.genre = data;
    this.toggleEdit();

})
}
editMode: boolean = false;
toggleEdit(){
  this.editMode = !this.editMode;
  if (this.editMode){
    this.formEdit = this.initForm();
  }else {
    this.formEdit = null;
  }
}
}