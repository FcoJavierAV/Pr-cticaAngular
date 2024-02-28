import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearUsuariosComponent } from './pages/crear-usuarios/crear-usuarios.component';
import { EditarUsuariosComponent } from './pages/editar-usuarios/editar-usuarios.component';
import { BuscarUsuariosComponent } from './pages/buscar-usuarios/buscar-usuarios.component';
import { BorrarUsuariosComponent } from './pages/borrar-usuarios/borrar-usuarios.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CrearUsuariosComponent,
    EditarUsuariosComponent,
    BuscarUsuariosComponent,
    BorrarUsuariosComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class UsuariosModule {}
