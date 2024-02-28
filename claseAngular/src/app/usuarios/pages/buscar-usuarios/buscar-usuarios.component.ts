import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuarios } from '../../models/usuarios.models';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-buscar-usuarios',
  templateUrl: './buscar-usuarios.component.html',
  styleUrls: ['./buscar-usuarios.component.scss'],
})
export class BuscarUsuariosComponent implements OnInit, OnDestroy {
  public listaUsuarios: Array<Usuarios> = new Array<Usuarios>();
  private unsuscribe$ = new Subject<void>();
  constructor(private service: UsuariosService) {}
  ngOnInit(): void {
  this.obtenerUsuarios()
  }
  public obtenerUsuarios(): void {
    this.service
      .obtenerUsuarios()
      .pipe(takeUntil(this.unsuscribe$))
      .subscribe({
        next: (res) => {
          this.listaUsuarios = res;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }
}
