import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.scss'],
})
export class CrearUsuariosComponent implements OnDestroy {
  nuevoUsuario = { name: '', job: '' };
  private unsuscribe$ = new Subject<void>();
  constructor(private service: UsuariosService) {}

  crearUsuario(): void {
    this.service
      .crearUsuario(this.nuevoUsuario)
      .pipe(takeUntil(this.unsuscribe$))
      .subscribe({
        next: (res) => console.log(res),
        error: (error) => console.log(error),
      });
  }
  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }
}
