import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from 'src/app/interface/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-agregar-editar-comentarios',
  templateUrl: './agregar-editar-comentarios.component.html',
  styleUrls: ['./agregar-editar-comentarios.component.css']
})
export class AgregarEditarComentariosComponent implements OnInit {

  agregarComentario: FormGroup;
  constructor(private fb: FormBuilder) {
    this.agregarComentario = this.fb.group({
      titulo:['',Validators.required,],
      creador:['',Validators.required],
      texto:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }
guardar(){

  const comentario:ComentarioService={
    titulo:this.agregarComentario.get('titulo')?.value,
    creador:this.agregarComentario.get('creador')?.value,
    texto:this.agregarComentario.get('texto')?.value,
    fechaCreacion: new Date
  };
  console.log(comentario);
}
}
