var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                HttpModule,
                RouterModule.forRoot([
                    {
                        path: 'novedades',
                        component: NovedadesComponent
                    },
                    {
                        path: 'asociados',
                        component: AsociadosComponent
                    },
                    {
                        path: 'autoridades',
                        component: AutoridadesComponent
                    },
                    {
                        path: 'beneficios-empresas',
                        component: BeneficiosEmpresasComponent
                    },
                    {
                        path: 'beneficios-socios',
                        component: BeneficiosSociosComponent
                    },
                    {
                        path: 'capacitaciones',
                        component: CapacitacionesComponent
                    },
                    {
                        path: 'conferencias',
                        component: ConferenciasComponent
                    },
                    {
                        path: 'contacto',
                        component: ContactoComponent
                    },
                    {
                        path: 'convenios',
                        component: ConveniosComponent
                    },
                    {
                        path: 'historia',
                        component: HistoriaComponent
                    },
                    {
                        path: 'objetivos-particulares',
                        component: ObjetivosParticularesComponent
                    },
                    {
                        path: 'opiniones',
                        component: OpinionesComponent
                    },
                    {
                        path: 'quienes-somos',
                        component: QuienesSomosComponent
                    },
                    {
                        path: '',
                        redirectTo: '/novedades',
                        pathMatch: 'full'
                    }
                ])
            ],
            providers: [],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map