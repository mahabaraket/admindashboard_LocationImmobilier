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

  constructor(private crudService:bienservice,private fb: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.crudService.getBiens().subscribe((res) => {
      this.listBiens = res;
      //this.Description=this.listBiens.prix+this.listBiens.typologie+this.listBiens.etage;
      console.log( this.listBiens);
    
    });    
   
  }

  deleteBien(id:any)
  {
   
    this.crudService.deleteBien(id).subscribe(() => {
      
      this.crudService.getBiens().subscribe((res) => {
        this.listBiens = res;
        console.log("bien supprimer")
     
      });    
    
    });    
  }


  openModal(targetModal:any) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static'
  });
 
  this.editProfileForm.patchValue({
    propName: 'user.firstname',
    place:' user.lastname',
    Typologie:' user.username',
    Superficie:' user.email',
    etage:'etage',
    composition:'composition',
    prix:'prix'

  });
 }

 onSubmit() {
  this.modalService.dismissAll();
  console.log("res:", this.editProfileForm.getRawValue());
 }

}
