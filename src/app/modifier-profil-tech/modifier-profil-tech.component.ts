import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-modifier-profil-tech',
  templateUrl: './modifier-profil-tech.component.html',
  styleUrls: ['./modifier-profil-tech.component.css']
})
export class ModifierProfilTechComponent implements OnInit {
  motDePasseForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  this.motDePasseForm = this.formBuilder.group({
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
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.motDePasseForm.value, null, 4));
  }
  onReset() {
    this.submitted = false;
    this.motDePasseForm.reset();
}
}
  
