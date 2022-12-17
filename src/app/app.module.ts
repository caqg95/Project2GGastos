import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";

import { HeaderComponent } from './components/Layout/header/header.component';
import { FooterComponent } from './components/Layout/footer/footer.component';
import { AboutComponent } from './components/Layout/about/about.component';
import {IngresarPresupuestoComponent} from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import {GastosComponent} from './components/gastos/gastos.component';
import {DivisasComponent} from './components/divisas/divisas.component';
import {CategoriasComponent} from './components/categorias/categorias.component';


const appRoutes: Routes = [
  { path: '', redirectTo:'/ingresarPresupuesto',pathMatch:'full' },
  { path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent },
  { path: 'gastos', component: GastosComponent },
  { path: 'divisas', component: DivisasComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'acerca', component: AboutComponent },
  { path: '**', redirectTo:'/ingresarPresupuesto',pathMatch:'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IngresarPresupuestoComponent,
    GastosComponent,
    DivisasComponent,
    CategoriasComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
