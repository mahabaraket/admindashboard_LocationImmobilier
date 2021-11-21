import { Component, OnInit } from '@angular/core';
import { bienservice } from '../services/Biens.service';

@Component({
  selector: 'app-gerer-bien',
  templateUrl: './gerer-bien.component.html',
  styleUrls: ['./gerer-bien.component.css']
})
export class GererBienComponent implements OnInit {
  listBiens: any[];

  constructor(private crudService:bienservice) { }

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

}
