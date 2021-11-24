import { Component, OnInit } from '@angular/core';
import { bienservice } from '../services/Biens.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-gerer-bien',
  templateUrl: './gerer-bien.component.html',
  styleUrls: ['./gerer-bien.component.css']
})
export class GererBienComponent implements OnInit {
  listBiens: any[];
  editProfileForm: FormGroup;
  bienByid: any;

  constructor(private crudService:bienservice,private fb: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {


    this.editProfileForm=this.fb.group({
      propName: [''],
      adress:[''],
      typologie:[''],
      superficie:[''],
      etage:[''],
      composition:[''],
      prix:['']
  
    });

    this.crudService.getBiens().subscribe((res) => {
      this.listBiens = res;
      //this.Description=this.listBiens.prix+this.listBiens.typologie+this.listBiens.etage;
      console.log( this.listBiens);
    
    });    
   
  }

  deleteBien(id:any)
  {
   
    this.crudService.deleteBien(id).subscribe(() => {
      alert("Bien supprimer avec success !")

      this.crudService.getBiens().subscribe((res) => {
        this.listBiens = res;
        console.log("bien supprimer")
     
      });    
    
    });    
  }


  getBienbyid(id:any)
  {
   
    this.crudService.findBienByid(id).subscribe((res) => {
      this.bienByid=res;
      console.log("find bien by id ",this.bienByid)
      
    });    
  }


  openModal(targetModal:any,id:any) {
    this.getBienbyid(id);
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static'
  });
 
  
 }

 onSubmit() {
  let bien={ 
    composition:this.editProfileForm.controls.composition.value,    
    adress:this.editProfileForm.controls.adress.value,
    etage:this.editProfileForm.controls.etage.value,
    etat:false,
   // picbyte :this.image ,
    prix:this.editProfileForm.controls.prix.value,
    proprietaire:this.editProfileForm.controls.propName.value, 
    superficie:this.editProfileForm.controls.superficie.value,
    typologie:this.editProfileForm.controls.typologie.value,
  }
  console.log("res:",bien);
  console.log("id curent update:",this.bienByid.id);

  this.crudService.updateBien(bien,this.bienByid.id).subscribe((res)=>{
    alert("Bien mise a jour avec success !")

    console.log("bien updated")
  });
  this.modalService.dismissAll();

 }

}
