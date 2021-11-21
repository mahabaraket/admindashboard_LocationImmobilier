import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';



@Component({
  selector: 'app-add-technicien',
  templateUrl: './add-technicien.component.html',
  styleUrls: ['./add-technicien.component.css']
})
export class AddTechnicienComponent implements OnInit {
  addtechnicienForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  this.addtechnicienForm = this.formBuilder.group({
    Prenom: ['', Validators.required],
    Nom: ['', Validators.required],
    age:['', Validators.required],
    specilalite:['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, {
    validator: MustMatch('password', 'confirmPassword')
});
}

  get f() { return this.addtechnicienForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.addtechnicienForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addtechnicienForm.value, null, 4));
  }
  onReset() {
    this.submitted = false;
    this.addtechnicienForm.reset();
}
}
  
