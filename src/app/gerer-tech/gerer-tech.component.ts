import { Component, OnInit } from '@angular/core';
import { TechService } from '../services/tech.service';

@Component({
  selector: 'app-gerer-tech',
  templateUrl: './gerer-tech.component.html',
  styleUrls: ['./gerer-tech.component.css']
})
export class GererTechComponent implements OnInit {
  listTech: any[];
  listTechById:any;

  constructor(private crudService:TechService) { }

  ngOnInit(): void {

    this.crudService.getTech().subscribe((res) => {
      this.listTech = res;
      this.listTech=this.listTech.filter(item=>item.role=="tech");
      console.log( this.listTech);
    
    });    
  }

  deleteTech(id:any)
  {
   
    this.crudService.deleteTech(id).subscribe(() => {
      alert("technicien supprimer avec success !")

      this.crudService.getTech().subscribe((res) => {
        this.listTech= res;
        this.listTech=this.listTech.filter(item=>item.role=="tech");
        console.log("tech supprimer")
     
      });    
    
    });    
  }


  getTechbyid(id:any)
  {
   
    this.crudService.findTechByid(id).subscribe((res) => {
      this.listTechById=res;
      console.log("find tech by id ",this.listTechById)
      
    });    
  }

  
  

}
