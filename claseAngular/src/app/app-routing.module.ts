import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { BuscarUsuariosComponent } from './usuarios/pages/buscar-usuarios/buscar-usuarios.component';
import { CrearUsuariosComponent } from './usuarios/pages/crear-usuarios/crear-usuarios.component';
import { BorrarUsuariosComponent } from './usuarios/pages/borrar-usuarios/borrar-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/pages/editar-usuarios/editar-usuarios.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', component: BuscarUsuariosComponent },
      { path: 'crear', component: CrearUsuariosComponent },
      { path: 'borrar', component: BorrarUsuariosComponent },
      { path: 'editar', component: EditarUsuariosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
