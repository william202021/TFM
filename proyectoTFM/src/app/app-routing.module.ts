import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from "src/app/inicio/inicio.component";
import { CursosComponent } from "src/app/cursos/cursos.component";
import { EmpezarComponent } from "src/app/empezar/empezar.component";
import { ForoComponent } from "src/app/foro/foro.component";
import { SesionComponent } from "src/app/sesion/sesion.component";

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'empezar', component: EmpezarComponent},
  {path: 'foro', component: ForoComponent},
  {path: 'sesion', component: SesionComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
