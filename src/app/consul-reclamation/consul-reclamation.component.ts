import { Component, OnInit } from '@angular/core';
import { ReclamationAdService } from '../services/reclamation-ad.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-consul-reclamation',
  templateUrl: './consul-reclamation.component.html',
  styleUrls: ['./consul-reclamation.component.css']
})
export class ConsulReclamationComponent implements OnInit {
 listReclamation:any;
 reclamation:any;

  constructor(private crudService:ReclamationAdService) { }

  ngOnInit(): void {
    this.crudService.getReclamations().subscribe((res) => {
      this.listReclamation = res;
      //this.Description=this.listBiens.prix+this.listBiens.typologie+this.listBiens.etage;
      console.log( this.listReclamation);
    
    });    
  }



deleteReclamation(id:any){
this.crudService.deleteReclamation(id).subscribe(()=> {
  alert("reclamation supprimée avec succes");

  this.crudService.getReclamations().subscribe((res) => {
    this.listReclamation = res;
  
 
  });    

});
}


}