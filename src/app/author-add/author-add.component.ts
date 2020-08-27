import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from '../services/author.service';
import { Author } from '../author';
import { empty } from 'rxjs';


@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.css']
})
export class AuthorAddComponent implements OnInit {

  constructor(private fb: FormBuilder, private as: AuthorService) { }
  createForm: FormGroup;

  ngOnInit(): void {
    this.createForm = this.fb.group(
      {
        first_name: ['', Validators.required],
        last_name: [''],
        nationality: [''],
        dob: [''],
        dod: [''],
        dead: [''],
      }
    )
  }
get author(){
 return this.createForm.get('author')
}
create(){
  const author: Author = this.createForm.value;
  //if (!empty(dod)){
   // dod = null;
    //dead = false;
  //}else {
 //dead = true;
  //}
  this.as.create(author).subscribe(
    res => console.log(res)
  );
}
}
