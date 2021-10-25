import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interface/comentario';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {

  listComentarios:  Comentario []=[
    {  titulo: 'Angular',creador: 'Dario', texto: 'HOLA MUNDO',  fechaCreacion: new Date()},
    {  titulo: 'react',creador: 'io', texto: ' MUNDO',  fechaCreacion: new Date()},
    {  titulo: 'Python',creador: 'yo', texto: ' MUNDO',  fechaCreacion: new Date()}

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
