import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.scss'],
})
export class EditarUsuariosComponent {
  id = null;
  usuario = { name: '', job: '' };
  private unsuscribe$ = new Subject<void>();
  constructor(private service: UsuariosService) {}

  actualizarUsuario(): void {
    this.service.editarUsuario(this.id, this.usuario).subscribe({
      next: (res) => console.log(res),
      error: (error) => console.log(error),
    });
  }
  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }
}
