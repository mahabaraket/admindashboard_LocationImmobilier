import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddTechnicienComponent } from './add-technicien/add-technicien.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AddBienComponent } from './add-bien/add-bien.component';
import { ListBienComponent } from './list-bien/list-bien.component';
import { GererBienComponent } from './gerer-bien/gerer-bien.component';
import { GererTechComponent } from './gerer-tech/gerer-tech.component';
import { ListTechComponent } from './list-tech/list-tech.component';
import { ProfilTechComponent } from './profil-tech/profil-tech.component';
import { ModifierProfilTechComponent } from './modifier-profil-tech/modifier-profil-tech.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsulReclamationComponent } from './consul-reclamation/consul-reclamation.component';
import { ConsultContratComponent } from './consult-contart/consult-contart.component';
import { GererDemandeComponent } from './gerer-demande/gerer-demande.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { ReclamationTechComponent } from './reclamation-tech/reclamation-tech.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddTechnicienComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AddBienComponent,
    ListBienComponent,
    GererBienComponent,
    GererTechComponent,
    ListTechComponent,
    ProfilTechComponent,
    ModifierProfilTechComponent,
    ConsulReclamationComponent,
    ConsultContratComponent,
    GererDemandeComponent,
    ReclamationTechComponent
  ],
  imports: [
    NgbModule,
     HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
