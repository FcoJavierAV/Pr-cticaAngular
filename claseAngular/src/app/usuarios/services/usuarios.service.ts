import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Usuarios } from '../models/usuarios.models';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private baseUrl = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {}

  obtenerUsuarios(): Observable<Usuarios[]> {
    return this.http.get<any>(this.baseUrl).pipe(
      map((res) => {
        return res.data.map((usuario) => new Usuarios(usuario));
      })
    );
  }

  crearUsuario(usuario): Observable<Usuarios[]> {
    return this.http.post<any>(this.baseUrl, usuario);
  }

  editarUsuario(id, usuario): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, usuario);
  }

  borrarUsuario(id): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
