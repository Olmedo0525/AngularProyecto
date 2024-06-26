import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../../../interfaces/usuarios.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsuarioService } from '../../../services/usuario.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})

export class UsuariosComponent implements OnInit{
  listaUsuarios: Usuario[] = [];
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _usuarioService: UsuarioService){}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.listaUsuarios = this._usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listaUsuarios);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminarUsuario(index: number){
    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuarios();
  }
}
