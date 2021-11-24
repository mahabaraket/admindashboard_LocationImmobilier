import { Component, OnInit } from '@angular/core';
import { ContartService } from '../services/contrat.service';
import { DemandeLocationService } from '../services/demande-location.service';


@Component({
  selector: 'app-gerer-demande',
  templateUrl: './gerer-demande.component.html',
  styleUrls: ['./gerer-demande.component.css']
})
export class GererDemandeComponent implements OnInit {
  listDemandeLoc: any[];

  constructor(private crudServiceCon:ContartService,private crudServiceDem:DemandeLocationService) { }

  ngOnInit(): void {

    this.crudServiceDem.getDemandeLoc().subscribe((res) => {
      this.listDemandeLoc = res;
      console.log( this.listDemandeLoc);
    
    });    
  }

  accepterDemande(id:any,nom:any,prenom:any,dateDeb:any,dateFin:any,localisation:any)
  {
    let nomClient=nom+" "+prenom;
    let Add={
      contrat:true,
      contratname:"--",
      dateDebut:dateDeb,
      dateFin:dateFin,
      localisation:localisation,
      email:"--",
      name:nomClient


    }
    alert("Accepter demande ?")

    this.crudServiceCon.createContrat(Add).subscribe((res)=>{
      alert("contrat créer successfuly")

      this.crudServiceDem.deleteDemandeLoc(id).subscribe(()=>{
      })

    })
  }

refuserDemande(id:any)
{
  alert("Refuser demande ?")

  this.crudServiceDem.deleteDemandeLoc(id).subscribe(()=>{
    console.log("refuser")
    alert("Demande refuser")
  })
}




}
