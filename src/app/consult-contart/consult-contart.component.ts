import { Component, OnInit } from '@angular/core';
import { ContartService } from '../services/contrat.service';

@Component({
  selector: 'app-consult-Contart',
  templateUrl: './consult-Contart.component.html',
  styleUrls: ['./consult-Contart.component.css']
})
export class ConsultContratComponent implements OnInit {
  listContrat: any[];
  listContratById: any;

  constructor(private crudService:ContartService) { }

  ngOnInit(): void {

    this.crudService.getContrat().subscribe((res) => {
      this.listContrat = res;
      console.log( this.listContrat);
    
    });    
  }

  deleteContrat(id:any)
  {
    console.log("Contrat id",id)
    alert("Supprimer contrat ?")

    this.crudService.deleteContrat(id).subscribe(() => {

      this.crudService.getContrat().subscribe((res) => {
        this.listContrat= res;
     
      });    
    
    });    
  }


  getContratbyid(id:any)
  {
   
    this.crudService.findContratByid(id).subscribe((res) => {
      this.listContratById=res;
      console.log("find Contrat by id ",this.listContratById)
      
    });    
  }

}
