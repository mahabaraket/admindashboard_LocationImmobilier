import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TechService } from '../services/tech.service';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-modifier-profil-tech',
  templateUrl: './modifier-profil-tech.component.html',
  styleUrls: ['./modifier-profil-tech.component.css']
})
export class ModifierProfilTechComponent implements OnInit {
  motDePasseForm: FormGroup;
  submitted = false;
  infoUser:any;

  constructor(private formBuilder: FormBuilder,private crudService:TechService) { }

  ngOnInit(): void {

    this.infoUser=localStorage.getItem("infoUser",);
    this.infoUser=JSON.parse(this.infoUser);
    console.log("info user ", this.infoUser)
  this.motDePasseForm = this.formBuilder.group({
    email :[this.infoUser.email, Validators.required],
    firstName :[this.infoUser.firstName, Validators.required],
    lastName :[this.infoUser.lastName, Validators.required],
    passwordAn :['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, {
    validator: MustMatch('password', 'confirmPassword')
});
}

  get f() { return this.motDePasseForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.motDePasseForm.invalid) {
          return;
      }else
      {
        localStorage.removeItem("infoUser");
        let upTech={
          specialite:this.infoUser.specialite,
          role:this.infoUser.role,
          firstName:this.f.firstName.value,
          lastName:this.f.lastName.value,
          email:this.f.email.value,
          password:this.f.password.value
        }
        let infoUser={
          id:this.infoUser.id,
         specialite:this.infoUser.specialite,
          role:this.infoUser.role,
          firstName:this.f.firstName.value,
          lastName:this.f.lastName.value,
          email:this.f.email.value,
          password:this.f.password.value,

        }
        localStorage.setItem("infoUser",JSON.stringify(infoUser))
        //this.infoUser=JSON.parse(this.infoUser);
        return this.crudService.updateTech(upTech,this.infoUser.id).subscribe(()=>{
          console.log("up tech",upTech)
  
        })
      }


      // display form values on success
  }
  onReset() {
    this.submitted = false;
    this.motDePasseForm.reset();
}
}
  
