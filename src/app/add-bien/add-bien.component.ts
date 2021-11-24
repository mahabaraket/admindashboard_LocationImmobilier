import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bienservice } from '../services/Biens.service'; 
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

 

  constructor(private formBuilder: FormBuilder, public crudService:bienservice) { }

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

  

 

  onFileSelect(input:any) {
    console.log(input.files);
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e: any) => {
        console.log('Got here: ', e.target.result);
        const formdata = new FormData();
        this.false=0;
       /*  formdata.append("composition",this.addBienForm.controls.Composition.value);
        formdata.append("adress",this.addBienForm.controls.place.value); 
        formdata.append("etage",this.addBienForm.controls.etage.value);    
        formdata.append("etat",this.false);    
        formdata.append("picbyte", input.files[0]);
        formdata.append("prix", this.addBienForm.controls.prix.value);
        formdata.append("proprietaire",this.addBienForm.controls.propName.value);
        formdata.append("superficie",this.addBienForm.controls.Superficie.value);
        formdata.append("typologie",this.addBienForm.controls.Typologie.value); */
        formdata.append("picbyte", input.files[0]);

        this.image= formdata//e.target.result.substring(22);


        console.log('formdata: ',formdata);

        this.obj.photoUrl = e.target.result;
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  

  get f() { return this.addBienForm.controls; }

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
       // picbyte :this.image ,
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
  onReset() {
    this.submitted = false;
    this.addBienForm.reset();
}
}

  
