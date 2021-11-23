import { Component, OnInit } from '@angular/core';
import { TechService } from '../services/tech.service';


@Component({
  selector: 'app-list-tech',
  templateUrl: './list-tech.component.html',
  styleUrls: ['./list-tech.component.css']
})
export class ListTechComponent implements OnInit {
  listTech: any[];

  constructor(private crudService:TechService) { }

  ngOnInit(): void {

    this.crudService.getTech().subscribe((res) => {
      this.listTech = res;
      //this.Description=this.listBiens.prix+this.listBiens.typologie+this.listBiens.etage;
      this.listTech=this.listTech.filter(item=>item.role=="tech");
      console.log( this.listTech);

    
    });   
  }

}
