import { NgModule, isDevMode } from '@angular/core';
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
import {IngresarGastoComponent} from './components/gastos/ingresar-gasto/ingresar-gasto.component';
import {ListarGastoComponent} from './components/gastos/listar-gasto/listar-gasto.component';
import {GastodetalleComponent} from './components/gastos/gastodetalle/gastodetalle.component';
import {DivisasComponent} from './components/divisas/divisas.component';
import {CategoriasComponent} from './components/categorias/categorias.component';
import { ServiceWorkerModule } from '@angular/service-worker';


const appRoutes: Routes = [
  { path: '', redirectTo:'/ingresarPresupuesto',pathMatch:'full' },
  { path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent },
  { path: 'gastos/:id', component: GastosComponent },
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
    IngresarGastoComponent,
    ListarGastoComponent,
    GastodetalleComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  exports:[
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
