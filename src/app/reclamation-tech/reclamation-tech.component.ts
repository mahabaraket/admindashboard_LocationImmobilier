import { Component, OnInit } from '@angular/core';
import { ReclamationAdService } from '../services/reclamation-ad.service';

@Component({
  selector: 'app-reclamation-tech',
  templateUrl: './reclamation-tech.component.html',
  styleUrls: ['./reclamation-tech.component.css']
})
export class ReclamationTechComponent implements OnInit {
  listReclamation:any;
  reclamation:any;
  rec:any;
  constructor(private crudService:ReclamationAdService ) {}

  ngOnInit(): void {
    this.crudService.getReclamations().subscribe((res) => {
      this.listReclamation = res;
      //this.Description=this.listBiens.prix+this.listBiens.typologie+this.listBiens.etage;
      console.log( this.listReclamation);
    
    });    
  }

changeStatus( id:any){
this.crudService.findReclamationByid(id).subscribe((res)=>{

  this.rec =res ;
  console.log(this.rec);


let recla={
  type:this.rec.type,
  description:this.rec.description,
  photo:this.rec.photo,
  date:this.rec.date,
  status:1,
}
//console.log(recla);

this.crudService.updateReclamation(recla,id).subscribe(()=>{alert("Reclamation mise a jour avec success !")

this.crudService.getReclamations().subscribe((res) => {
  this.listReclamation = res;
  //this.Description=this.listBiens.prix+this.listBiens.typologie+this.listBiens.etage;
  console.log( this.listReclamation);
} );
});



});   

}
}
