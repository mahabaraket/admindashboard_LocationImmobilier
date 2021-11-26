import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TechService } from '../services/tech.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  submitted = false;

  listUser: any[];
  fetchCordonnee: any;

  constructor(private crudService:TechService,private formBuilder: FormBuilder,private route:Router) { }

  ngOnInit(): void {

    localStorage.clear();
    this.login = this.formBuilder.group({
     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    
  });

    this.crudService.getTech().subscribe((res) => {
      this.listUser = res;
      //this.Description=this.listBiens.prix+this.listBiens.typologie+this.listBiens.etage;
      console.log( this.listUser);
    
    });   
  }

  get f() { return this.login.controls; }
  onSubmit(){
    this.submitted=true;

    this.fetchCordonnee=this.listUser.find(item=>item.email==this.f.email.value &&item.password==this.f.password.value)  ;
    console.log("cordonner",this.fetchCordonnee)
    if(this.fetchCordonnee==undefined)
    {
          alert("Compte n'existe pas or verifier vos cordonnées");
    }
    else{
      localStorage.setItem("currentUser",this.f.email.value);
      localStorage.setItem("role",this.fetchCordonnee.role);
      localStorage.setItem("infoUser",JSON.stringify(this.fetchCordonnee));

      if(this.fetchCordonnee.role=="Ad"){
        window.location.href="/addBien";
      }
      else if(this.fetchCordonnee.role=="Tech"){
        window.location.href="/profilTech";

      }
      //this.route.navigate(["/addBien"]);
    }

  }

}
