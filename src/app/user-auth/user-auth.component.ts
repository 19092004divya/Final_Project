import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iuser } from '../_models/user.model';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('f') authForm!:NgForm;

  user:Iuser={email:'',password:''};
  
  isRegisterMode:boolean=false;
 
  registerToggle(){
    this.isRegisterMode=!this.isRegisterMode;
  }

  // onSubmit(form:NgForm){
  //   this.user.email=form.value.email;
  //   this.user.password=form.value.pass

  //   console.log(this.user);
  // }

  onSubmit(){
    this.user.email=this.authForm.value.email;
    this.user.password=this.authForm.value.pass

    console.log(this.user);
  }
  
}
  


