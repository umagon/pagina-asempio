import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { NovedadesComponent } from './components/novedades/novedades.component';
import { AsociadosComponent } from './components/asociados/asociados.component';
import { AutoridadesComponent } from './components/autoridades/autoridades.component';
import { BeneficiosEmpresasComponent } from './components/beneficios-empresas/beneficios-empresas.component';
import { BeneficiosSociosComponent } from './components/beneficios-socios/beneficios-socios.component';
import { CapacitacionesComponent } from './components/capacitaciones/capacitaciones.component';
import { ConferenciasComponent } from './components/conferencias/conferencias.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ConveniosComponent } from './components/convenios/convenios.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { ObjetivosParticularesComponent } from './components/objetivos-particulares/objetivos-particulares.component';
import { OpinionesComponent } from './components/opiniones/opiniones.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';

const routes: Route[] = [
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
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
