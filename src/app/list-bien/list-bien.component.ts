import { Component, Inject, OnInit } from '@angular/core';
import { bienservice } from '../services/Biens.service';


@Component({
  selector: 'app-list-bien',
  
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {
  comptes: any;
  bienImmobilier: any;
  listBiens: any[];
  Description: any;

  constructor( private crudService:bienservice) { }

  ngOnInit(): void {
   
    this.crudService.getBiens().subscribe((res) => {
      this.listBiens = res;
      //this.Description=this.listBiens.prix+this.listBiens.typologie+this.listBiens.etage;
      console.log( this.listBiens);
    
    });    
   

  }
 

  


}
