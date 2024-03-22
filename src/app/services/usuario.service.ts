import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuarios: Usuario[] = [
    { "usuario": "maria34", "nombre": "Helium", "apellido": "Gonzalez", "sexo": "femenino" },
    { "usuario": "juanP", "nombre": "Lithium", "apellido": "Lopez", "sexo": "masculino" },
    { "usuario": "carlaM", "nombre": "Beryllium", "apellido": "Martinez", "sexo": "femenino" },
    { "usuario": "oscar76", "nombre": "Boron", "apellido": "Jimenez", "sexo": "masculino" },
    { "usuario": "tereC", "nombre": "Carbon", "apellido": "Castro", "sexo": "femenino" }
    ];

  constructor() { }

  getUsuario(){
    return this.listaUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listaUsuarios.splice(index, 1);
  }
}
