import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenreService } from '../services/genre.service';
import { Genre } from '../genre';

@Component({
  selector: 'app-genre-add',
  templateUrl: './genre-add.component.html',
  styleUrls: ['./genre-add.component.css']
})
export class GenreAddComponent implements OnInit {

  constructor( private fb: FormBuilder, private gs: GenreService) { }
  
  createForm: FormGroup;

  ngOnInit(): void {
    this.createForm = this.fb.group(
      {
       name: ['', [Validators.required, Validators.maxLength(50)]] 
      }
    )
  }
  get name(){
    return this.createForm.get('name')
  }
  
  create(){
    const genre: Genre = this.createForm.value;
    this.gs.create(genre).subscribe(
      response => console.log(response)
    );

  }

}
