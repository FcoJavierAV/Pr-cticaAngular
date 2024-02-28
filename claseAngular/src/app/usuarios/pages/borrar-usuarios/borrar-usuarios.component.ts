import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-borrar-usuarios',
  templateUrl: './borrar-usuarios.component.html',
  styleUrls: ['./borrar-usuarios.component.scss'],
})
export class BorrarUsuariosComponent {
  id = null;
  private unsuscribe$ = new Subject<void>();
  constructor(private service: UsuariosService) {}

  borrarUsuario(): void {
    this.service.borrarUsuario(this.id).subscribe({
      next: (res) => console.log(`Usuario con id ${this.id} eliminado`),
      error: (error) => console.log(error),
    });
  }
  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }
}
