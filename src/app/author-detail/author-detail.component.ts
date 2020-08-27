import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../author';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  constructor(private authorService: AuthorService, private route: ActivatedRoute, private fb: FormBuilder) { }
 author: Author;
 formAdd: FormGroup;

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.authorService.get(id).subscribe(data => { 
      this.author = data;
    this.formAdd = this.initForm();
  })
  }
  initForm(): FormGroup{
    return this.fb.group( {
      first_name: [this.author.first_name],
      last_name: [this.author.last_name],
      nationality: [this.author.nationality],
      dob: [this.author.dob],
      dod: [this.author.dod],
      dead: [this.author.dead],
    })
  }
 add(): void{
  const authorUpdate:Author = this.formAdd.value;
  authorUpdate.id = this.author.id;
  //localde update
  this.authorService.update(authorUpdate).subscribe(data => {this.author = data;
  this.toggleAdd();
})

}
addMode: boolean = false;
  toggleAdd(){
    this.addMode = !this.addMode;
    if (this.addMode){
      this.formAdd = this.initForm();

    }
    else{
      this.formAdd = null;
    }
 }
}
