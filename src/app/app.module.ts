import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsociadosComponent } from './components/asociados/asociados.component';
import { AutoridadesComponent } from './components/autoridades/autoridades.component';
import { BeneficiosSociosComponent } from './components/beneficios-socios/beneficios-socios.component';
import { BeneficiosEmpresasComponent } from './components/beneficios-empresas/beneficios-empresas.component';
import { CapacitacionesComponent } from './components/capacitaciones/capacitaciones.component';
import { ConferenciasComponent } from './components/conferencias/conferencias.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ConveniosComponent } from './components/convenios/convenios.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { ObjetivosParticularesComponent } from './components/objetivos-particulares/objetivos-particulares.component';
import { OpinionesComponent } from './components/opiniones/opiniones.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NovedadesComponent,
    HeaderComponent,
    FooterComponent,
    AsociadosComponent,
    AutoridadesComponent,
    BeneficiosEmpresasComponent,
    BeneficiosSociosComponent,
    CapacitacionesComponent,
    ConferenciasComponent,
    ContactoComponent,
    ConveniosComponent,
    HistoriaComponent,
    ObjetivosParticularesComponent,
    OpinionesComponent,
    QuienesSomosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
