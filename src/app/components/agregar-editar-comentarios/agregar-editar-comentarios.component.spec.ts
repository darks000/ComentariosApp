import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarComentariosComponent } from './agregar-editar-comentarios.component';

describe('AgregarEditarComentariosComponent', () => {
  let component: AgregarEditarComentariosComponent;
  let fixture: ComponentFixture<AgregarEditarComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarComentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEditarComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
