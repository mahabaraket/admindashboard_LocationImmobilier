import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bienservice } from '../services/Biens.service'; 
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-bien',
  templateUrl: './add-bien.component.html',
  styleUrls: ['./add-bien.component.css']
})
export class AddBienComponent implements OnInit {
  addBienForm: FormGroup;
  submitted = false;
  files: File;
  public obj: any = {};
  image: any;
  false: any;
  filePath!:String;
  downloadURL!: Observable<string>;
  fb = '';
 

  constructor(private formBuilder: FormBuilder, public crudService:bienservice 
    ,private storage: AngularFireStorage, private httpClient: HttpClient) { }

  ngOnInit(): void {
  this.addBienForm = this.formBuilder.group({
  propName: ['', Validators.required],
  place: ['', Validators.required],
  Typologie:['', Validators.required],
  Superficie:['', Validators.required],
  etage:['',Validators.required],
  Composition:['',Validators.required],
  prix:['',Validators.required]
 });

  }
  

  get f() { return this.addBienForm.controls; }


  //add biens
  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.addBienForm.invalid) {
          return;
      }

      // display form values on success
      let bien={ 
        composition:this.addBienForm.controls.Composition.value,    
        adress:this.addBienForm.controls.place.value,
        etage:this.addBienForm.controls.etage.value,
        etat:false,
        image :this.fb ,
        prix:this.addBienForm.controls.prix.value,
        proprietaire:this.addBienForm.controls.propName.value, 
        superficie:this.addBienForm.controls.Superficie.value,
        typologie:this.addBienForm.controls.Typologie.value,
      }
     // console.log("tyyyyypppppeeee",this.image.getAll())
      console.log("befor created",bien);
    return this.crudService.createbien(bien).subscribe((res)=>{
      alert("Ajout succesfuly")

      console.log(res,"after crated")})
  }

  //resert form
  onReset() {
    this.submitted = false;
    this.addBienForm.reset();
}



//upload image
onFileSelected(event: any) {
   
  var n = Date.now();
  this.filePath = event.target.files[0]
  const file = event.target.files[0];
  const filePath = `Produits/${n}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(`Produits/${n}`, file);
  task
    .snapshotChanges()
    .pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe((url) => {
          if (url) {
            this.fb = url;
          }
          console.log(this.fb);
        });
      })
    )
    .subscribe((url) => {
      if (url) {
        console.log(url);
      }
    });
}
}

  
